import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      });
    }
  }, []);
  return (
    <ContextApi.Provider value={{ setToggle, toggle, setUser, user }}>
      {children}
    </ContextApi.Provider>
  );
};
