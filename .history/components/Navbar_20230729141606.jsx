import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4 shadow-md shadow-yellow-400">
      <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
        SKILL Point
      </div>
      <div>
        <button className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 mx-2 text-2xl rounded-xl text-white font-bold">
          Sign Up
        </button>
        <button className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 mx-2 text-2xl rounded-xl text-white font-bold">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
