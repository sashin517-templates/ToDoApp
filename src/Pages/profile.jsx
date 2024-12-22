import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "Sashin Deemantha",
    phone: "077 222 5556",
    email: "Shashin123@gmail.com",
    birthday: "12 / 12 / 2002",
    password: "mypassword123",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPasswordGuidelines, setShowPasswordGuidelines] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate(); // Initialize useNavigate

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-800 flex flex-col items-center text-white">
      {/* Profile Picture */}
      <div className="flex justify-center mt-10">
        <img
          src="/assets/icons/profile-picture.png"
          alt="Profile Picture"
          className="w-24 h-24 rounded-full border-4 border-solid bg-white to-white p-[1px]"
        />
      </div>

      {/* Profile Title */}
      <h2 className="text-3xl font-semibold mt-5 mb-5 text-white">Profile</h2>

      {/* Editable Fields Box */}
      <div className="inline-flex flex-col p-5 rounded-lg bg-white shadow-lg max-w-[800px]">
        {/* Success message */}
        {showSuccessMessage && (
          <div className="bg-green-600 text-white p-2 mb-4 rounded-md text-center">
            Profile Changes Saved Successfully!
          </div>
        )}

        <div className="space-y-8">
          {/* Name and Phone Fields on the Same Line */}
          <div className="flex justify-between gap-20">
            <div className="flex items-center gap-5 w-full">
              <img
                src="/assets/icons/user.png"
                alt="User Icon"
                className="w-5 h-5"
              />
              <span className="text-purple-600">Name</span>
              <input
                className="bg-purple-600 border-white p-1 text-white p-1 rounded-md w-full"
                type="text"
                value={profile.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-5 w-full">
              <img
                src="/assets/icons/phone.png"
                alt="Phone Icon"
                className="w-5 h-5"
              />
              <span className="text-purple-600">Phone</span>
              <input
                className="bg-purple-600 text-white p-1 rounded-md w-full"
                type="text"
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>

          {/* Birthday and Email Fields on the Same Line */}
          <div className="flex justify-between gap-20">
            <div className="flex items-center gap-5 w-full">
              <img
                src="/assets/icons/calendar.png"
                alt="Birthday Icon"
                className="w-5 h-5"
              />
              <span className="text-purple-600">Birthday</span>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="bg-purple-600 text-white p-1 rounded-md  w-full"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="flex items-center gap-5 w-full">
              <img
                src="/assets/icons/email.png"
                alt="Email Icon"
                className="w-5 h-5"
              />
              <span className="text-purple-600">Email</span>
              <input
                className="bg-purple-600 text-white p-1 rounded-md w-full"
                type="email"
                value={profile.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex items-center gap-3 w-full">
            <img
              src="/assets/icons/lock.png"
              alt="Password Icon"
              className="w-5 h-5"
            />
            <span className="text-purple-600">Password</span>
            <input
              className="bg-purple-600 text-white p-1 rounded-md w-auto"
              type={showPassword ? "text" : "password"}
              value={profile.password}
              onChange={(e) => handleChange("password", e.target.value)}
              onDoubleClick={togglePasswordVisibility}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
          </div>

          {/* Password Guidelines Popup */}
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
      </div>

      {/* Buttons Container */}
      <div className="flex justify-between mt-5 gap-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")} // Adjust the path to your landing page
          className="bg-white hover:bg-indigo-600 hover:text-white text-purple-600 py-2 px-6 rounded-lg text-lg"
        >
          Back
        </button>

        {/* Save Changes Button */}
        <button
          onClick={handleSaveChanges}
          className="bg-white hover:bg-indigo-600 hover:text-white text-purple-600 py-2 px-6 rounded-lg text-lg"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
