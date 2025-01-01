import React, { useState, useEffect } from "react";
import CalendarGrid from "./components/CalendarGrid";
import EventModal from "./components/EventModal";
import EventList from "./components/EventList";
import useLocalStorage from "./hooks/useLocalStorage";
import { DndProvider } from "react-dnd";  // Import DndProvider
import { HTML5Backend } from "react-dnd-html5-backend";  // Import HTML5 backend

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Set to current date by default
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEventIndex, setEditingEventIndex] = useState(null);
  const [events, setEvents] = useLocalStorage("calendar-events", {});

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = () => {
    setEditingEventIndex(null);
    setIsModalOpen(true);
  };

  const handleEditEvent = (index) => {
    setEditingEventIndex(index);
    setIsModalOpen(true);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = { ...events };

    // Correctly format the selected date as yyyy-mm-dd
    const dateKey = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;

    // Check if there are events for the selected date
    if (updatedEvents[dateKey]) {
      updatedEvents[dateKey].splice(index, 1); // Delete the event at the given index
    }

    setEvents(updatedEvents); // Update the events state
  };

  const handleSaveEvent = (eventData) => {
    const updatedEvents = { ...events };
    const dateKey = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;

    if (!updatedEvents[dateKey]) {
      updatedEvents[dateKey] = [];
    }

    if (editingEventIndex !== null) {
      updatedEvents[dateKey][editingEventIndex] = eventData;
    } else {
      updatedEvents[dateKey].push(eventData);
    }

    setEvents(updatedEvents);
  };

  const formattedSelectedDate = selectedDate.toLocaleDateString();

  return (
    <DndProvider backend={HTML5Backend}> {/* Wrap your app in DndProvider */}
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Calendar */}
          <div className="w-2/3">
            <h1 className="text-3xl font-bold text-center mb-8">Calendar App</h1>
            <CalendarGrid
              onDateSelect={handleDateClick}
              currentDate={selectedDate}
              events={events}
            />
          </div>

          {/* Event List */}
          <div className="w-1/3">
            {selectedDate && (
              <div className="mt-4">
                <h2 className="text-xl font-bold">Selected Date: {formattedSelectedDate}</h2>
                <button
                  onClick={handleAddEvent}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Event
                </button>
                <EventList
                  events={events[`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`] || []}
                  onEdit={handleEditEvent}
                  onDelete={handleDeleteEvent}
                />
              </div>
            )}
          </div>
        </div>

        <EventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveEvent}
          eventData={
            editingEventIndex !== null
              ? events[`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`] &&
                events[`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`][editingEventIndex]
              : null
          }
        />
      </div>
    </DndProvider>
  );
}

export default App;
