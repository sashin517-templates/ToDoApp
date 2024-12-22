import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    <div className="min-h-screen bg-white flex flex-col items-center text-black">
      {" "}
      {/* Change background to white */}
      {/* Profile Picture */}
      <div className="flex justify-center mt-10">
        <img
          src="/assets/icons/profile-picture.png" // Use the correct path for your profile picture
          alt="Profile Picture"
          className="w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-b from-purple-600 to-white p-[1px]"
        />
      </div>
      {/* Profile Title */}
      <h2 className="text-3xl font-semibold mt-5 mb-5 text-slate-100">
        Profile
      </h2>
      <div className="w-full max-w-sm p-5 rounded-lg bg-white">
        {" "}
        {/* Background is white */}
        {/* Success message */}
        {showSuccessMessage && (
          <div className="bg-green-600 text-white p-2 mb-4 rounded-md text-center">
            Profile Changes Saved Successfully!
          </div>
        )}
        <div className="space-y-4">
          {/* Editable Fields */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/icons/user.png"
              alt="User Icon"
              className="w-5 h-5"
            />
            <span className="text-gray-400">Name:</span>
            <input
              className="bg-gray-800 text-white p-1 rounded-md"
              type="text"
              value={profile.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/icons/phone.png"
              alt="Phone Icon"
              className="w-5 h-5"
            />
            <span className="text-gray-400">Phone:</span>
            <input
              className="bg-gray-800 text-white p-1 rounded-md"
              type="text"
              value={profile.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/icons/email.png"
              alt="Email Icon"
              className="w-5 h-5"
            />
            <span className="text-gray-400">Email:</span>
            <input
              className="bg-gray-800 text-white p-1 rounded-md"
              type="email"
              value={profile.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/icons/calendar.png"
              alt="Birthday Icon"
              className="w-5 h-5"
            />
            <span className="text-gray-400">Birthday:</span>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="bg-gray-800 text-white p-1 rounded-md"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          {/* Editable Password Field */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/icons/lock.png"
              alt="Password Icon"
              className="w-5 h-5"
            />
            <span className="text-gray-400">Password:</span>
            <input
              className="bg-gray-800 text-white p-1 rounded-md"
              type={showPassword ? "text" : "password"}
              value={profile.password}
              onChange={(e) => handleChange("password", e.target.value)}
              onDoubleClick={togglePasswordVisibility}
              onFocus={handlePasswordFocus} // Show guidelines when focused
              onBlur={handlePasswordBlur} // Hide guidelines when focus is lost
            />
          </div>

          {/* Password Guidelines */}
          {showPasswordGuidelines && (
            <div className="bg-gray-700 text-gray-300 p-3 rounded-md mt-2">
              <ul>
                <li>Must be at least 8 characters long.</li>
                <li>Should contain at least one uppercase letter.</li>
                <li>Should contain at least one number.</li>
                <li>
                  Should contain at least one special character (e.g., !, @, #,
                  $).
                </li>
              </ul>
            </div>
          )}
        </div>
        <button
          onClick={handleSaveChanges}
          className="w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
