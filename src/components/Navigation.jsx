import React from "react";

const Navigation = ({ currentDate, setCurrentDate }) => {
  const handlePrevious = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNext = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={handlePrevious}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Previous
      </button>
      <span className="text-lg font-semibold">
        {currentDate.toLocaleDateString("default", { month: "long", year: "numeric" })}
      </span>
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
