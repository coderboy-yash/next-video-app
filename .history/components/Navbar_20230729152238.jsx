import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4 shadow-md shadow-yellow-300  items-center">
      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
        <span className="text-7xl font">S</span>kill Point
      </div>
      <div>
        <button className="bg-orange-300 p-3 mx-4 text-2xl rounded-xl text-white font-bold">
          Sign Up
        </button>
        <button className="bg-orange-400 p-3 mx-4 text-2xl rounded-xl text-white font-bold">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
