import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4">
      <div className="text-5xl bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
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
