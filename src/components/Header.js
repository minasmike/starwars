import React from "react";
import logo from ".././assets/logo.png";

const Header = ({ movie }) => {
  return (
    <div className="flex items-center justify-center h-20 bg-gray-900 text-white">
      <div className="mr-4">
        <img src={logo} alt="Logo" className="h-20 w-36" />
      </div>

    </div>
  );
};

export default Header;