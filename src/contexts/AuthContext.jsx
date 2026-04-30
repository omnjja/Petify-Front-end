import React, { createContext, useEffect, useState } from "react";
// import * as authApi from "@/APIs/authAPI";
import * as authApi from "@/mockAPIs/mockAuthAPI";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // derive role from user, no separate state
  const role = user?.role || "PET_OWNER";

  useEffect(() => {
    const stored = localStorage.getItem("user_data");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const signup = async (formData) => {
    const { data } = await authApi.signup(formData);
    localStorage.setItem("user_token", data.token);
    localStorage.setItem("user_data", JSON.stringify(data.user));
    setUser(data.user);
    return data;
  };

  const login = async (formData) => {
    const { data } = await authApi.login(formData);
    localStorage.setItem("user_token", data.token);
    localStorage.setItem("user_data", JSON.stringify(data.user));
    setUser(data.user);
    return data;
  };

  const forgotPassword = async (email) => {
    const { data } = await authApi.forgotPassword(email);
    return data;
  };

  const changePassword = async (userData) => {
    const { data } = await authApi.changePassword(userData);
    return data;
  };

  const logout = async () => {
    await authApi.logout();
    setUser(null);
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_data");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        signup,
        logout,
        forgotPassword,
        changePassword,
        role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
