import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import FloatingNav from "../Components/FloatingNav";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Sashin Deemantha",
    age: "19",
    phone: "077 222 5556",
    email: "Shashin123@gmail.com",
    birthday: "12 / 12 / 2002",
    password: "mypassword123",
    profilePicture: "/Propic.png",
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
    <div className="dark:bg-dtb text-black dark:text-white flex flex-col items-center justify-center h-dvh w-dvw ">
      <div className="flex gap-10 w-full justify-evenly items-center p-5 max-md:flex-col max-sm:flex-col">
        <div className="relative flex flex-col items-center gap-5 ">
          <img
            src={profile.profilePicture}
            alt=""
            title="Upload Profile Picture"
            className="w-[400px] h-[400px] shadow-lg rounded-2xl outline-transparent max-xl:w-[350px] max-xl:h-[350px] "
          />
          <label className="absolute bottom-2 right-2 rounded-lg cursor-pointer">
            <img className="bg-white rounded-xl h-10" src="/Add1.svg" alt="" />
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-5 rounded-xl bg-ltf2 dark:bg-dtf shadow-2xl p-10 max-[1280px]:w-[500px] max-lg:w-[400px] max-md:w-[400px] w-[600px]">
          {(showSuccessMessage || loggedOut) && (
            <div className="bg-green-600 text-white p-3 mb-4 rounded-md text-center">
              {showSuccessMessage
                ? "Profile Changes Saved Successfully!"
                : "You have successfully logged out!"}
            </div>
          )}
          <div className="flex flex-col gap-2 max-md:gap-4 h-auto max-sm:flex-nowrap ">
            <div className="flex flex-col gap-1 max-md:flex-row max-md:gap-2 max-md:items-center">
              <label className="text-black dark:text-white text-md font-medium pl-5 max-lg:hidden max-md:hidden">
                Name
              </label>
              <input
                className="bg-ltb dark:bg-dtb  border-none text-sm text-black dark:text-white pl-5 py-2 rounded-md w-full"
                type="text"
                value={profile.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 max-md:flex-row max-md:gap-2 max-md:items-center">
              <label className="text-black dark:text-white text-md font-medium pl-5 max-lg:hidden max-md:hidden">
                Email
              </label>
              <input
                className="bg-ltb dark:bg-dtb border-none text-sm text-black dark:text-white pl-5 py-2 rounded-md w-full"
                type="email"
                value={profile.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 max-md:flex-row max-md:gap-2 max-md:items-center">
              <label className="text-black dark:text-white text-md font-medium pl-5 max-lg:hidden max-md:hidden">
                Phone
              </label>
              <input
                className="bg-ltb dark:bg-dtb border-none text-sm text-black dark:text-white pl-5 py-2 rounded-md w-full"
                type="text"
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 max-md:flex-row max-md:gap-2 max-md:items-center w-full">
              <label className="text-black dark:text-white text-md font-medium pl-5 max-lg:hidden max-md:hidden">
                Birthday
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="bg-ltb dark:bg-dtb border-none w-full max-md:w-full text-sm text-black dark:text-white pl-5 py-2 rounded-md"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="flex relative flex-col gap-1 max-md:flex-row max-md:gap-2 max-md:items-center">
              <label className="text-black dark:text-white text-md font-medium pl-5 top-0 max-lg:hidden max-md:hidden">
                Password
              </label>
              <input
                className="bg-ltb dark:bg-dtb border-none text-sm text-black dark:text-white pl-5 py-2 rounded-md w-full"
                type={showPassword ? "text" : "password"}
                value={profile.password}
                onChange={(e) => handleChange("password", e.target.value)}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute bottom-1/2 right-5 translate-y-full text-purple-white max-lg:hidden"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
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
          <div className="flex gap-3 max-[1280px]:flex-col max-md:flex-row max-sm:flex-row">
            <button
              onClick={() => navigate("/")}
              className="bg-primary2 text-white py-2 px-6 rounded-lg w-full max-md:py-1 max-md:px-3 max-sm:py-1 max-sm:px-3"
            >
              Back
            </button>
            <button
              onClick={handleSaveChanges}
              className="bg-primary2 text-white py-2 px-6 rounded-lg w-full max-md:py-1 max-md:px-3 max-sm:py-1 max-sm:px-3"
            >
              Edit
            </button>
            <button
              onClick={handleLogOut}
              className="bg-red text-white py-2 px-6 rounded-lg w-full max-md:py-1 max-md:px-3 max-sm:py-1 max-sm:px-3"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
