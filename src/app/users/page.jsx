import NavLink from "@/components/NavLink";
import React from "react";

const getUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users", {
    cache:"force-cache",
    next:{revalidate:60}
  });
  return await res.json();
};

const Users = async () => {
  const userData = await getUsers();
  console.log(userData)

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Users</h1>


        <NavLink href={"/users/adduser"}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          + Add Users
        </button>
        </NavLink>
        
       
        
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1  gap-6">
        {userData.map((user, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 border"
          >
            <h2 className="text-lg font-semibold mb-2">
              {user.name}
            </h2>

            <p className="text-gray-600 mb-4">
              {user.message}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
                Edit
              </button>

              <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;