import React, { useContext, useState } from "react";
import { ProfileContext } from "@/contexts/ProfileContext";
import useCustomForm from "@/hooks/useCustomForm";
import { editUserSchema } from "@/schemas/userSchema";
import ChangePassword from "./ChangePassword";
import toast, { Toaster } from "react-hot-toast";
import { EDIT_FIELDS } from "@/constants/userProfile";

const EditUserInfo = ({ open, setOpen }) => {
  const { userProfile, setUserProfile, updateUser } =
    useContext(ProfileContext);
  const [changePassOpen, setChangePassOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useCustomForm({
    defaultValues: {
      name: userProfile?.name || "",
      phoneNumber: userProfile?.phoneNumber || "",
      address: userProfile?.address || "",
    },
    schema: editUserSchema,
  });

  const close = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = async (formData) => {
    try {
      const { data } = await updateUser(formData);
      setUserProfile((prev) => ({ ...prev, ...data }));
      close();
    } catch {
      toast.error("Failed to update profile");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <Toaster position="top-right" />

      <div className="max-w-[95%] md:w-[50%] mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-[#2F4156] mb-6 text-center">
          Edit Profile
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {EDIT_FIELDS.map(({ name, label, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-[#2F4156]">
                {label}
              </label>
              <input
                type={type}
                {...register(name)}
                className="w-full p-2 border border-gray-200 rounded-lg mt-1 focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
              />
              <p className="h-4 text-xs text-red-500">
                {errors[name]?.message || ""}
              </p>
            </div>
          ))}

          <div className="flex justify-between gap-3 mt-6">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={close}
              className="cursor-pointer flex-1 px-5 py-2 rounded-lg bg-gray-300 text-[#2F4156] hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer flex-1 px-5 py-2 rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition shadow-md"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>

      <ChangePassword open={changePassOpen} setOpen={setChangePassOpen} />
    </div>
  );
};

export default EditUserInfo;
