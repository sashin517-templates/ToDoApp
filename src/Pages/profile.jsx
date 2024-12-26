import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ isDarkMode }) => {
  const [profile, setProfile] = useState({
    name: "Sashin Deemantha",
    phone: "077 222 5556",
    email: "Shashin123@gmail.com",
    birthday: "12 / 12 / 2002",
    password: "mypassword123",
    profilePicture: "/assets/icons/profile-picture.png", // Default profile picture
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPasswordGuidelines, setShowPasswordGuidelines] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [loggedOut, setLoggedOut] = useState(false); // Track log-out status

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSaveChanges = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handlePasswordFocus = () => {
    setShowPasswordGuidelines(true);
  };

  const handlePasswordBlur = () => {
    setShowPasswordGuidelines(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, profilePicture: imageUrl }));
    }
  };

  const handleLogOut = () => {
    // Clear user data (e.g., authentication token, user data)
    setLoggedOut(true);

    // you can also navigate the user back to the login or home page
    setTimeout(() => {
      navigate("/"); // Redirect to the landing page or login page after log out
    }, 3000);
  };
  //coding
  return (
    <div
      className={`h-dvh ${
        isDarkMode
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-b from-white to-purple-800 text-white"
      } flex flex-col justify-center items-center`}
    >
      {/* Profile Picture */}
      <div className="flex justify-center mt-10">
        <img
          src={profile.profilePicture}
          alt="Profile Picture"
          className="w-24 h-24 rounded-full border-4 border-white"
        />
      </div>

      {/* Profile Title */}
      <h2 className="text-3xl font-semibold mt-5 mb-5">Profile</h2>

      {/* Change Profile Picture Button */}
      <div className="flex justify-center">
        <label className="text-white bg-purple-600 py-2 px-6 rounded-lg cursor-pointer hover:bg-purple-700">
          Change Profile Picture
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePictureChange}
          />
        </label>
      </div>

      {/* Editable Fields Box */}
      <div className="flex flex-col p-5 rounded-lg bg-white shadow-lg max-w-4xl w-full space-y-8 mt-8">
        {/* Success message */}
        {(showSuccessMessage || loggedOut) && (
          <div className="bg-green-600 text-white p-3 mb-4 rounded-md text-center">
            {showSuccessMessage
              ? "Profile Changes Saved Successfully!"
              : "You have successfully logged out!"}
          </div>
        )}

        {/* Name and Phone Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-purple-600">Name</label>
            <input
              className="bg-purple-600 border-white text-white p-2 rounded-md"
              type="text"
              value={profile.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-purple-600">Phone</label>
            <input
              className="bg-purple-600 text-white p-2 rounded-md"
              type="text"
              value={profile.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </div>

        {/* Birthday and Email Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-purple-600">Birthday</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="bg-purple-600 text-white p-2 rounded-md w-full"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-purple-600">Email</label>
            <input
              className="bg-purple-600 text-white p-2 rounded-md"
              type="email"
              value={profile.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col relative">
          <label className="text-purple-600">Password</label>
          <div className="relative">
            <input
              className="bg-purple-600 text-white p-2 rounded-md w-full pr-16"
              type={showPassword ? "text" : "password"}
              value={profile.password}
              onChange={(e) => handleChange("password", e.target.value)}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-2 right-2 text-purple-white"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Password Guidelines.password */}
        {showPasswordGuidelines && (
          <div className="mt-3 p-4 bg-yellow-100 text-yellow-800 rounded-md shadow-md">
            <p>
              <strong>Password Guidelines:</strong>
            </p>
            <ul className="list-disc pl-5">
              <li>At least 8 characters</li>
              <li>Must include an uppercase letter</li>
              <li>Must include a lowercase letter</li>
              <li>Must include a number</li>
              <li>May include special characters</li>
            </ul>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-5">
        <button
          onClick={() => navigate("/")}
          className="bg-white hover:purple-600 text-purple-600 py-2 px-6 rounded-lg w-full sm:w-40 mt-4"
        >
          Back
        </button>
        <button
          onClick={handleSaveChanges}
          className="bg-white hover:purple-600 text-purple-600 py-2 px-6 rounded-lg w-full sm:w-40 mt-4"
        >
          Save Changes
        </button>
        <button
          onClick={handleLogOut}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg w-full sm:w-40 mt-4"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
//  Hi
