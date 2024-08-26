import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">Logo</h1>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <FaSearch
            className="absolute top-0 right-0 mt-3 mr-5 text-gray-500"
            size={20}
          />
        </div>

        <div className="flex gap-4">
          <div className="icons__wrappers">
            <FiUser />
          </div>
          <div className="icons__wrappers">
            <LuShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
