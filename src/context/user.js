import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api.js";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({});
  const checkNationalId = async (nationalId) => {
    try {
      const result = await axios.get(`/checkNationalId/${nationalId}`);
      return result.status;
    } catch (error) {
      if (+error.response.status === 404) return 404;
      else console.log(error);
    }
  };
  const login = async (nationalId, password) => {
    try {
      const result = await axios.get("/login", { nationalId, password });
      setIsLoggedIn(true);
      setUser(result.data.user);
      localStorage.setItem("authorization-token", result.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    try {
      setIsLoggedIn(false);
      setUser({});
      localStorage.removeItem("authorization-token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, checkNationalId, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
