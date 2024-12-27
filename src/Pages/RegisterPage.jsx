import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import GoogleLogo from '../assets/google-logo.png';

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Example register logic - Replace with real authentication
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="h-[90dvh] bg-ltb dark:bg-dtb flex justify-center items-center">
      <div className="bg-ltf dark:bg-dtf rounded-lg shadow-lg p-10 max-w-sm w-full">
        <h1 className="text-4xl font-bold text-primary2 text-center mb-6">
          SIGN UP
        </h1>
        {errorMessage && (
          <p className="text-red text-sm mb-4 text-center">{errorMessage}</p>
        )}
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-black dark:text-white pl-5"
            >
              Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-5 py-2 border-none rounded-lg focus:ring-2 bg-white dark:bg-dtb focus:ring-primary2 focus:outline-none"
              placeholder="Enter Your Name"
              required
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-lg font-medium text-black dark:text-white pl-5"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-2 border-none rounded-lg focus:ring-2 bg-white dark:bg-dtb focus:ring-primary2 focus:outline-none "
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-lg font-medium text-black dark:text-white pl-5"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-2 border-none rounded-lg focus:ring-2 bg-white dark:bg-dtb focus:ring-primary2 focus:outline-none"
              placeholder="Enter your password"
              autoComplete="off"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary2 text-white py-2 rounded-lg focus:ring-4 focus:ring-primary2 focus:outline-none font-semibold"
          >
            Register
          </button>
        </form>

        <p className="text-md text-black dark:text-white text-center mt-6">
          Already have an account?{" "}
          <button
            onClick={handleLogin}
            className="text-black dark:text-white text-md font-semibold hover:underline focus:outline-none"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
