import React from "react";

const PhotoInput = ({ register, error }) => (
  <div className="md:col-span-2">
    <label className="block text-[#2F4156] font-medium text-sm">Photo</label>
    <input
      type="file"
      accept="image/*"
      {...register("photo")}
      className="w-full px-4 py-2 border rounded-lg cursor-pointer focus:ring-1 focus:ring-[#FD7E14]"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default PhotoInput;
