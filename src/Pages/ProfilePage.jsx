import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Sashin Deemantha",
    phone: "077 222 5556",
    email: "Shashin123@gmail.com",
    birthday: "12 / 12 / 2002",
    password: "mypassword123",
    profilePicture: "/profile-picture.png",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPasswordGuidelines, setShowPasswordGuidelines] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [loggedOut, setLoggedOut] = useState(false);

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
    setLoggedOut(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div className="dark:bg-dtb text-black dark:text-white flex flex-col items-center h-[90dvh]">
      <div className="flex justify-center gap-5 flex-col h-full items-center p-5">
        <div className="flex flex-col items-center gap-5">
          <img
            src={profile.profilePicture}
            alt="Profile Picture"
            className="w-h-40 h-40 rounded-full border-none"
          />
          <label className="text-white bg-primary2 py-2 px-6 rounded-lg cursor-pointer">
            Change Profile Picture
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </label>
        </div>
        <div className="flex flex-col rounded-lg bg-white dark:bg-dtf shadow-lg max-w-2xl w-full p-10 border-bb border-2">
          {(showSuccessMessage || loggedOut) && (
            <div className="bg-green-600 text-white p-3 mb-4 rounded-md text-center">
              {showSuccessMessage
                ? "Profile Changes Saved Successfully!"
                : "You have successfully logged out!"}
            </div>
          )}
          <div className="flex flex-col gap-5 w-full h-auto">
            <div className="flex flex-col gap-1">
              <label className="text-black dark:text-white text-lg font-medium pl-5">
                Name
              </label>
              <input
                className="bg-ltf dark:bg-dtb  border-none text-black dark:text-white pl-5 py-2 rounded-md"
                type="text"
                value={profile.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-black text-lg font-medium pl-5">
                Email
              </label>
              <input
                className="bg-ltf dark:bg-dtb border-none text-black dark:text-white pl-5 py-2 rounded-md"
                type="email"
                value={profile.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-black dark:text-white text-lg font-medium pl-5">
                Phone
              </label>
              <input
                className="bg-ltf dark:bg-dtb border-none text-black dark:text-white pl-5 py-2 rounded-md"
                type="text"
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-black dark:text-white text-lg font-medium pl-5">
                Birthday
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="bg-ltf dark:bg-dtb border-none text-black dark:text-white pl-5 py-2 rounded-md w-full"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="flex flex-col gap-1 relative">
              <label className="text-black dark:text-white text-lg font-medium pl-5 top-0 ">
                Password
              </label>
              <input
                className="bg-ltf dark:bg-dtb border-none text-black dark:text-white pl-5 py-2 rounded-md w-full"
                type={showPassword ? "text" : "password"}
                value={profile.password}
                onChange={(e) => handleChange("password", e.target.value)}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              <div className="absolute w-full">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-10 right-5 text-purple-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
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
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-primary2 text-white py-2 px-6 rounded-lg w-full sm:w-40 mt-4"
          >
            Back
          </button>
          <button
            onClick={handleSaveChanges}
            className="bg-primary2 text-white py-2 px-6 rounded-lg w-full sm:w-40 mt-4"
          >
            Save Changes
          </button>
          <button
            onClick={handleLogOut}
            className="bg-red text-white py-2 px-6 rounded-lg w-full sm:w-40 mt-4"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
