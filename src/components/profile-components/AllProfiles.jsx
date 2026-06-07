import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import AddNewPet from "./AddNewPet";
import UseUserPets from "@/hooks/UseUserPets";
import LoadingSpinner from "../LoadingSpinner";

const AllProfiles = () => {
  const allPets = UseUserPets();
  const [addOpen, setAddOpen] = useState(false);

  return !allPets ? (
    <LoadingSpinner text="Loading..." />
  ) : (
    <>
      {allPets.length > 0 ? (
        <div className="w-full flex flex-col">
          {allPets.map((pet, id) => (
            <ProfileInfo pet={pet} key={id} />
          ))}
        </div>
      ) : (
        <div
          to="/profile/newpet-form"
          className="text-[#2F4156] w-fit mx-auto py-5 "
        >
          You haven't add any pet yet
        </div>
      )}

      <div className="max-w-[80%] flex mx-auto md:justify-end mb-5 ">
        <button
          className="w-full md:w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer"
          onClick={() => setAddOpen(true)}
        >
          + Add New Pet
        </button>
      </div>

      <AddNewPet open={addOpen} setOpen={setAddOpen} />
    </>
  );
};

export default AllProfiles;
