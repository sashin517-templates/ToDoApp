import React from "react";
import Lock from "/Lock.svg";

function InputPassword() {
  return (
    <div class="flex justify-center items-center font-montserrat text-xs bg-white h-[50px] w-[24rem] rounded-3xl shadow-md px-4 focus-within:outline focus-within:outline-2 focus-within:outline-white">
      <img src={Lock} alt="email-icon" class="h-6 w-6 mr-2" />
      <input
        type="password"
        placeholder="Password"
        class="flex-grow bg-white outline-none text-sm placeholder:text-black"
        required
        autoComplete="off"
      />
    </div>
  );
}

export default InputPassword;
