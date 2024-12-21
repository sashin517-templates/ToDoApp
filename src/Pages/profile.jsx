import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-800 flex flex-col items-center text-white">
      <div className="w-full max-w-sm mt-10 p-5 rounded-lg bg-gray-900">
        {/* Profile Content */}
        <div className="flex flex-col items-center mb-5">
          <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75H4.5v-.75z"
              />
            </svg>
          </div>
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75H4.5v-.75z"
              />
            </svg>
            <span>Sashin Deemantha</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25c0 3.004-2.746 5.25-6.375 5.25S6.75 11.254 6.75 8.25m12.75 0A7.5 7.5 0 005.25 8.25m12.75 0V6a3.75 3.75 0 00-3.75-3.75h-3a3.75 3.75 0 00-3.75 3.75v2.25"
              />
            </svg>
            <span>12 / 12 / 2002</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span>077 222 5556</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 5.25v13.5A2.25 2.25 0 0119.5 21H4.5a2.25 2.25 0 01-2.25-2.25V5.25A2.25 2.25 0 014.5 3h15a2.25 2.25 0 012.25 2.25z"
              />
            </svg>
            <span>Shashin123@gmail.com</span>
          </div>
        </div>

        {/* Edit Button */}
        <button className="w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
          Edit Profile
        </button>
      </div>

      <Link to="/">
        <button>Back to Landing Page</button>
      </Link>
    </div>
  );
};

export default ProfilePage;
