import React, { createContext, useContext, useEffect, useState } from "react";
import * as userApi from "../APIs/userAPI";
import { confirmMessage } from "../utils/confirmMessage";
import { toastPromise } from "../utils/toastPromise";
import { AuthContext } from "./AuthContext";

const ProfileContext = createContext();
const ProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [userPets, setUserPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const { role } = useContext(AuthContext);

  useEffect(() => {
    if (role !== "PET_OWNER") return;
    const token = localStorage.getItem("user_token");
    if (!token) return;
    const getUserData = async () => {
      try {
        setLoading(true);
        const response = await userApi.getUser();
        setUserProfile(response.data);
        return response.data;
      } catch (err) {
        throw err?.response?.data;
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, []);

  useEffect(() => {
    if (role !== "PET_OWNER") return;
    const token = localStorage.getItem("user_token");
    if (!token) return;
    const getUserPets = async () => {
      try {
        setLoading(true);
        const response = await userApi.getUserPets();
        setUserPets(response.data);
        return response.data;
      } catch (err) {
        throw err?.response?.data;
      } finally {
        setLoading(false);
      }
    };
    getUserPets();
  }, []);

  const updateUser = async (payload) => {
    const willUpdate = await confirmMessage({
      text: "Are you sure you want to update your profile?",
      confirmText: "Yes",
      cancelText: "Cancel",
    });
    if (!willUpdate) return;
    return await toastPromise(userApi.updateUser(payload), {
      loading: "Updating Profile... ⏳",
      success: "Profile updated successfully!",
      error: (error) =>
        error.response?.data?.errors?.[0]?.message ||
        error.response?.data?.message ||
        "Updating profile failed ❌",
    });
  };

  return (
    <ProfileContext.Provider
      value={{ userProfile, setUserProfile, updateUser, loading, userPets }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
export { ProfileContext };
