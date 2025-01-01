import React from "react";

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Events</h2>
      {events.length === 0 ? (
        <p className="text-gray-500">No events for this day.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li
              key={index}
              className="border p-3 rounded flex justify-between items-center"
            >
              <div>
                <h3 className="text-md font-bold">{event.name}</h3>
                <p className="text-sm">
                  {event.startTime} - {event.endTime}
                </p>
                {event.description && (
                  <p className="text-sm text-gray-500">{event.description}</p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
