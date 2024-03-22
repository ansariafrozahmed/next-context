"use client";
import UserContext from "@/context/UserContext";
import React, { useContext, useState } from "react";

const Profile = () => {
  const [name, setName] = useState(null);
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(name);
    setName("");
  };
  return (
    <div>
      <form
        className="flex flex-col gap-5 items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="p-2 w-80 border border-white text-black"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-white text-black p-2 border border-white">
          Set Name
        </button>
      </form>
    </div>
  );
};

export default Profile;
