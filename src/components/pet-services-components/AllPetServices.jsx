import React, { useContext, useEffect, useState } from "react";
import PetService from "./PetService";
import ServiceFilters from "./ServiceFilters";
import ServiceBook from "./ServiceBook";
import UseServices from "../../hooks/UseServices";
import toast, { Toaster } from "react-hot-toast";
import { ServicesContext } from "../../contexts/ServicesContext";
import LoadingSpinner from "../LoadingSpinner";

const PAGECOUNT = 9;
const AllPetServices = () => {
  const petServices = UseServices();
  const [openBook, setOpenBook] = useState(false);
  const { loading } = useContext(ServicesContext);

  // unique filter options
  const prices = [...new Set(petServices?.map((s) => s.price))];
  const ratings = [5, 4, 3, 2, 1];

  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = PAGECOUNT;

  const handleCategoryChange = (category) => {
    setSelectedCategories(
      selectedCategories?.includes(category)
        ? selectedCategories?.filter((categ) => categ != category)
        : [...selectedCategories, category]
    );
    setCurrentPage(1);
  };

  const handlePriceChange = (price) => {
    setSelectedPrices(
      selectedPrices?.includes(price)
        ? selectedPrices?.filter((p) => p != price)
        : [...selectedPrices, price]
    );
    setCurrentPage(1);
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(
      selectedRatings?.includes(rating)
        ? selectedRatings?.filter((r) => r != rating)
        : [...selectedRatings, rating]
    );
    setCurrentPage(1);
  };

  // Apply filters
  const filteredServices = petServices?.filter((service) => {
    const categoryMatch =
      selectedCategories?.length > 0
        ? selectedCategories?.includes(service.category)
        : service;

    const priceMatch =
      selectedPrices?.length > 0
        ? selectedPrices?.includes(service.price)
        : service;

    const ratingMatch =
      selectedRatings?.length > 0
        ? selectedRatings?.includes(service.rating)
        : service;

    return categoryMatch && priceMatch && ratingMatch;
  });

  // Pagination logic
  const indexOfLast = currentPage * servicesPerPage;
  const indexOfFirst = indexOfLast - servicesPerPage;
  const currentServices = filteredServices?.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredServices?.length / servicesPerPage);

  const [searchTerm, setSearchTerm] = useState("");
  // search by name
  const searchedServices = currentServices?.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return petServices?.length === 0 ? (
    <p className="col-span-full text-center bg-white text-gray-500 min-h-14 py-5">
      No services
    </p>
  ) : loading ? (
    <LoadingSpinner text="Services are loading..." />
  ) : (
    <div className="p-4 md:p-10">
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-2xl font-bold text-[#2F4156]">Services</h2>
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
          <ServiceFilters
            prices={prices}
            ratings={ratings}
            selectedCategories={selectedCategories}
            selectedPrices={selectedPrices}
            selectedRatings={selectedRatings}
            onCategoryChange={handleCategoryChange}
            onPriceChange={handlePriceChange}
            onRatingChange={handleRatingChange}
          />
        </div>

        <main className="w-full md:w-3/4">
          {/* 🔍 Search Bar */}
          <label className="input w-full  mb-7 outline-none focus:ring-2 focus:ring-[#FD7E14]">
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
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchedServices?.length > 0 ? (
              searchedServices?.map((service, id) => (
                <PetService key={id} service={service} setOpen={setOpenBook} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 min-h-14">
                No services found
              </p>
            )}
          </div>

          {searchedServices?.length > 0 && (
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
      <ServiceBook open={openBook} setOpen={setOpenBook} />
    </div>
  );
};

export default AllPetServices;
