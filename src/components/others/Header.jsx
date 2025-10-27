import React from "react";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between w-full px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-md rounded-b-2xl"
    >
      {/* Left side: Greeting */}
      <div>
        <h1 className="text-xl sm:text-2xl font-light">
          Hello 👋
          <br />
          <span className="text-2xl sm:text-3xl font-semibold text-red-400">
            Abdul Hamid
          </span>
        </h1>
      </div>

      {/* Right side: Logout button */}
      <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 transition-all duration-200 rounded-xl font-medium shadow-md">
        <LogOut className="w-5 h-5" />
        <span>Log Out</span>
      </button>
    </motion.header>
  );
};

export default Header;
