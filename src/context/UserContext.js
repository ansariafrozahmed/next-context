// contexts/UserContext.js
"use client";
import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const addUser = (name) => {
    setUser([...user, name]);
  };

  return (
    <UserContext.Provider value={{ user, addUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
