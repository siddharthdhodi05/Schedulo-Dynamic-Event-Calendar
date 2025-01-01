import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { generateCalendarDays } from "../utils/calendarUtils";

const CalendarGrid = ({ onDateSelect, currentDate, events, setEvents, selectedDate }) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = generateCalendarDays(year, month);

  const handleDayClick = (day) => {
    if (day.isCurrentMonth) {
      onDateSelect(new Date(year, month, day.day));
    }
  };

  const hasEvent = (day) => {
    return events[`${year}-${month + 1}-${day.day}`]?.length > 0;
  };

  const isSelectedDay = (day) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day.day
    );
  };

  const getEventColor = (event) => {
    switch (event.category) {
      case "work":
        return "bg-green-200";
      case "personal":
        return "bg-yellow-200";
      case "others":
        return "bg-purple-200";
      default:
        return "bg-blue-200";
    }
  };

  const Event = ({ event, day }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "event",
      item: { ...event, day },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    return (
      <div
        ref={drag}
        className={`text-xs p-1 mt-1 rounded ${getEventColor(event)} ${isDragging ? "opacity-50" : ""}`}
      >
        {event.name}
      </div>
    );
  };

  const CalendarDay = ({ day }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "event",
      drop: (item) => handleEventDrop(item, day), // Handle drop
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }));

    return (
      <div
        ref={drop}
        className={`text-center p-4 border cursor-pointer 
          ${day.isCurrentMonth ? "bg-white" : "bg-gray-100 text-gray-400"} 
          ${isOver ? "bg-blue-100" : ""} ${isSelectedDay(day) ? "bg-blue-500 text-white" : ""}
          hover:bg-blue-50`}
        onClick={() => handleDayClick(day)}
      >
        {day.day}
        {hasEvent(day) &&
          events[`${year}-${month + 1}-${day.day}`].map((event) => (
            <Event key={event.id} event={event} day={day} />
          ))}
      </div>
    );
  };

  const handleEventDrop = (event, newDay) => {
    const updatedEvents = events[`${year}-${month + 1}-${newDay.day}`] || [];
    updatedEvents.push(event);

    // Remove event from the old day
    const previousEvents = events[`${year}-${month + 1}-${event.day}`].filter(
      (e) => e.id !== event.id
    );

    // Update events state
    setEvents({
      ...events,
      [`${year}-${month + 1}-${newDay.day}`]: updatedEvents,
      [`${year}-${month + 1}-${event.day}`]: previousEvents,
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
      {/* Month Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => onDateSelect(new Date(year, month - 1))}
          className="px-4 py-2 text-white bg-gray-500 rounded"
        >
          Previous
        </button>
        <h2 className="text-xl font-bold">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button
          onClick={() => onDateSelect(new Date(year, month + 1))}
          className="px-4 py-2 text-white bg-gray-500 rounded"
        >
          Next
        </button>
      </div>

      {/* Weekdays Header */}
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center font-bold p-2 bg-gray-100 border border-gray-300"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <CalendarDay key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
