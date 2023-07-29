import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4">
      <div className="text-4xl">Skill Point</div>
      <div>
        <button>Signup</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
