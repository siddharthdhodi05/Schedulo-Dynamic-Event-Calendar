import React, { useState } from "react";

const EventModal = ({ isOpen, onClose, onSave, eventData }) => {
  const [eventName, setEventName] = useState(eventData?.name || "");
  const [startTime, setStartTime] = useState(eventData?.startTime || "");
  const [endTime, setEndTime] = useState(eventData?.endTime || "");
  const [description, setDescription] = useState(eventData?.description || "");

  const handleSave = () => {
    if (!eventName || !startTime || !endTime) {
      alert("Please fill in all required fields.");
      return;
    }
    onSave({ name: eventName, startTime, endTime, description });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">{eventData ? "Edit Event" : "Add Event"}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Event Name *</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Start Time *</label>
          <input
            type="time"
            className="w-full p-2 border rounded"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">End Time *</label>
          <input
            type="time"
            className="w-full p-2 border rounded"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
