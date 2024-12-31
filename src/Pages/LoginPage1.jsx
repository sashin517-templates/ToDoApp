import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "/Google.svg";

//Test edit

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Example login logic - Replace with real authentication
    if (email === "user@example.com" && password === "password") {
      navigate("/profile");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google login logic
    alert("Google login not yet implemented.");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-900 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login
        </h1>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 focus:outline-none font-semibold"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-between mt-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg mt-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 focus:outline-none"
        >
          <img src={GoogleLogo} alt="Google" className="h-6 w-6 mr-2" />
          <span className="font-semibold">Sign in with Google</span>
        </button>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don't have an account?{" "}
          <button
            onClick={handleRegister}
            className="text-purple-600 font-semibold hover:underline focus:outline-none"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
