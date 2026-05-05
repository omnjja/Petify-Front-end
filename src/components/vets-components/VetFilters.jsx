import React from "react";

const VetFilters = ({
  locations,
  ratings,
  selectedLocations,
  selectedRatings,
  onLocationChange,
  onRatingChange,
}) => {
  return (
    <aside className="w-full md:w-2/3 py-5 px-6 bg-gray-50 rounded-lg shadow-lg h-fit">
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-[#2F4156] text-xl">Locations</h3>
        {locations?.map((location) => (
          <label
            key={location}
            className="flex items-center gap-2 mb-2 text-[#2F4156] text-sm"
          >
            <input
              type="checkbox"
              checked={selectedLocations.includes(location)}
              onChange={() => onLocationChange(location)}
              className="accent-[#FD7E14]"
            />
            {location}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-[#2F4156] text-xl">Ratings</h3>
        {ratings?.map((rating) => (
          <label
            key={rating}
            className="flex items-center gap-2 mb-2 text-[#2F4156] text-sm"
          >
            <input
              type="checkbox"
              checked={selectedRatings.includes(rating)}
              onChange={() => onRatingChange(rating)}
              className="accent-[#FD7E14]"
            />
            ⭐ {rating}+
          </label>
        ))}
      </div>
    </aside>
  );
};

export default VetFilters;
