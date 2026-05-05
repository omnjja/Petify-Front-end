import React, { useContext, useState } from "react";
import Vet from "./Vet";
import VetFilters from "./VetFilters";
import UseVets from "@/hooks/UseVets";
import { VetsContext } from "@/contexts/VetsContext";
import LoadingSpinner from "../LoadingSpinner";

const PAGECOUNT = 8;

const Available = () => {
  const vets = UseVets();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { loading } = useContext(VetsContext);
  const vetsPerPage = PAGECOUNT;

  // unique filter options
  const locations = [...new Set(vets?.map((v) => v.clinicAddress))];
  const ratings = [5, 4, 3, 2, 1];

  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  // filter handlers
  const handleLocationChange = (location) => {
    setSelectedLocations(
      selectedLocations.includes(location)
        ? selectedLocations.filter((loc) => loc !== location)
        : [...selectedLocations, location],
    );
    setCurrentPage(1);
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(
      selectedRatings.includes(rating)
        ? selectedRatings.filter((r) => r !== rating)
        : [...selectedRatings, rating],
    );
    setCurrentPage(1);
  };

  // Apply filters
  const filteredVets = vets?.filter((vet) => {
    const locationMatch =
      selectedLocations.length > 0
        ? selectedLocations.includes(vet.clinicAddress)
        : true;

    const ratingMatch =
      selectedRatings.length > 0
        ? selectedRatings.some((r) => Math.floor(vet.rate) >= r)
        : true;

    return locationMatch && ratingMatch;
  });

  // search
  const searchedVets = filteredVets?.filter((vet) =>
    vet.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const indexOfLast = currentPage * vetsPerPage;
  const indexOfFirst = indexOfLast - vetsPerPage;
  const currentVets = searchedVets?.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(searchedVets?.length / vetsPerPage);

  return vets?.length === 0 ? (
    <p className="col-span-full text-center bg-white text-gray-500 min-h-14 py-5">
      No vets available
    </p>
  ) : loading ? (
    <LoadingSpinner text="Services are loading..." />
  ) : (
    <div className="p-4 md:p-10">
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-2xl font-bold text-[#2F4156]">Available Vets</h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 bg-[#FD7E14] text-white rounded-lg"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } md:block w-full md:w-1/4 transition-all`}
        >
          <VetFilters
            locations={locations}
            ratings={ratings}
            selectedLocations={selectedLocations}
            selectedRatings={selectedRatings}
            onLocationChange={handleLocationChange}
            onRatingChange={handleRatingChange}
          />
        </div>

        <main className="w-full md:w-3/4">
          <div className="text-[#2F4156] font-bold text-3xl capitalize text-center mb-6 md:hidden">
            Available Vets
          </div>

          {/* Search Bar */}
          <label className="input w-full mb-7 outline-none focus:ring-2 focus:ring-[#FD7E14] flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search vets..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="flex-1 outline-none"
            />
          </label>

          <div className="flex gap-5 flex-wrap justify-center bg-[#F8F9FA] w-full rounded-[15px] p-5 md:p-7">
            {currentVets?.length > 0 ? (
              currentVets?.map((vet, index) => <Vet key={index} vet={vet} />)
            ) : (
              <p className="col-span-full text-center text-gray-500 min-h-14">
                No vets found
              </p>
            )}
          </div>

          {searchedVets?.length > vetsPerPage && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="cursor-pointer px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-[#2F4156]">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="cursor-pointer px-4 py-2 bg-[#FD7E14] text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Available;
