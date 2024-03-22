"use client";
import UserContext from "@/context/UserContext";
import React, { useContext } from "react";

const ProfileName = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  https: return (
    <div>
      {user ? (
        <div className="h-[200px] w-[200px] p-5 text-center mb-5">
          <img
            className="h-full w-full object-contain"
            src={`https://api.dicebear.com/7.x/micah/svg?seed=${user}`}
            alt=""
          />
          <h2 className="text-2xl font-medium pt-2">{user}</h2>
        </div>
      ) : (
        <div className="h-[200px] w-[200px] p-5 text-center mb-5">
          <img
            src="https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg"
            alt=""
          />
          <h2 className="text-2xl font-medium pt-2">Name</h2>
        </div>
      )}
    </div>
  );
};

export default ProfileName;
