import React from "react";

const CourseCard = () => {
  return (
    <div className="w-72 border border-gray-200 rounded-lg shadow-md overflow-hidden font-sans">
      <img
        src="https://via.placeholder.com/400x300" // Replace with your image URL
        alt="Basic Tee 8-Pack"
        className="w-full h-auto"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Basic Tee 8-Pack</h2>
        <p className="text-sm text-gray-600 mb-2">
          Get the full lineup of our Basic Tees. Have a fresh shirt all week, and
          an extra for laundry day.
        </p>
        <p className="text-xs text-gray-500 mb-1">8 colors</p>
        <p className="text-base font-bold text-black">&#8377; 256</p>
      </div>
    </div>
  );
};

export default CourseCard;