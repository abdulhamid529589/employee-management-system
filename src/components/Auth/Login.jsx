import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-4">
      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-8 shadow-2xl"
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back 👋</h2>
        <p className="text-center text-gray-400 mb-8">
          Please log in to continue
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col space-y-5"
        >
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">Password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 transition-colors rounded-xl font-semibold text-white"
          >
            Log In
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-6 space-y-2">
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            Forgot password?
          </a>
          <div>
            <span className="text-sm text-gray-400">
              Don’t have an account?{" "}
            </span>
            <a href="#" className="text-red-500 hover:underline font-medium">
              Sign Up
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
