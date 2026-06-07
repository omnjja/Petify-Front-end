import React, { useContext, useState } from "react";
import EditUserInfo from "./EditUserInfo";
import ChangePassword from "./ChangePassword";
import LoadingSpinner from "../LoadingSpinner";
import { ProfileContext } from "@/contexts/ProfileContext";
import InfoField from "../shared/ui/InfoField";
import { USER_FIELDS } from "@/constants/userProfile";

const UserInfo = () => {
  const { userProfile, loading, userPets } = useContext(ProfileContext);
  const [editOpen, setEditOpen] = useState(false);
  const [changePassOpen, setChangePassOpen] = useState(false);
  if (loading) return <LoadingSpinner text="Loading..." />;
  if (!userProfile)
    return (
      <p className="col-span-full text-center bg-white text-gray-500 min-h-14 py-5">
        Couldn't Fetch User Profile
      </p>
    );

  return (
    <div className="max-w-[95%] md:max-w-[70%] mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 w-full">
        <h2 className="capitalize text-xl md:text-2xl font-semibold text-[#2F4156] mb-4 text-center md:text-left">
          {userProfile?.name}'s profile
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {USER_FIELDS.map(({ label, key }) => (
            <InfoField key={key} label={label} value={userProfile[key]} />
          ))}

          <div className="bg-white p-2 rounded-lg flex justify-between items-center text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Password:</span>
            <button
              onClick={() => setChangePassOpen(true)}
              className="text-[#FD7E14] font-medium hover:underline"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-[#2F4156]">Pets</h3>
          <ul className="list-disc list-inside text-[#2f4156b0] mt-1 bg-white p-2 rounded-lg text-sm md:text-base">
            {userPets?.length > 0 ? (
              userPets.map((pet) => (
                <li key={pet.id ?? pet.name}>
                  {pet.name} — {pet.species}
                </li>
              ))
            ) : (
              <li className="text-gray-400 italic">No pets added</li>
            )}
          </ul>
        </div>

        <div className="mt-6 flex justify-center md:justify-end">
          <button
            onClick={() => setEditOpen(true)}
            className="cursor-pointer px-5 py-2 rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition shadow-md"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <EditUserInfo open={editOpen} setOpen={setEditOpen} />
      <ChangePassword open={changePassOpen} setOpen={setChangePassOpen} />
    </div>
  );
};

export default UserInfo;
