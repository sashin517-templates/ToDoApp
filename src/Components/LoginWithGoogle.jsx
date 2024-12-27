import React from "react";
import Google from "/Google.svg";

function LoginWithGoogle() {
  return (
    <a
      href="#"
      id="login-google"
      className="flex justify-center items-center font-montserrat text-base font-medium dark:font-semibold bg-primary2 dark:bg-white text-white dark:text-primary2 py-2.5 px-9 rounded-lg"
    >
      <img src={Google} alt="email-icon" class="h-6 w-6 mr-2" /> Log in with
      Google
    </a>
  );
}

export default LoginWithGoogle;
