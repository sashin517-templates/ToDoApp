import React from "react";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import LoginButton from "./LoginButton";
import LoginWithGoogle from "./LoginWithGoogle";

function LoginCard() {
  return (
    <div className="flex flex-col justify-center items-center w-[30rem] h-[32rem] p-5 bg-glass_light dark:bg-glass_dark rounded-lg bg-p">
      <ul className="flex flex-col justify-center items-center gap-10 ">
        <h1 className="text-5xl font-medium text-primary2">LOGIN</h1>
        <li>
          <div className="flex flex-col justify-center items-center gap-4">
            <InputEmail />
            <InputPassword />
            <LoginButton />
          </div>
        </li>
        <li className="flex text-sm font-montserrat text-black dark:text-white">
          --------------------
          <span className="mx-3 text-black">OR</span>
          --------------------
        </li>
        <li className="">
          <LoginWithGoogle />
        </li>
      </ul>
    </div>
  );
}

export default LoginCard;
