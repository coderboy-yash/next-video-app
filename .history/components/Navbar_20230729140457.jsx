import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4">
      <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
        Skill Point
      </div>
      <div>
        <button>Signup</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
