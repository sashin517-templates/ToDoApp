import React from "react";

function LoginButton() {
  return (
    <a href="/home">
      <button
        name="submit"
        id="submit"
        type="submit"
        className="flex justify-center items-center font-montserrat text-base font-medium dark:font-semibold text-white bg-PrimePurple dark:bg-white dark:text-primary2 py-2.5 px-9 rounded-lg"
      >
        Log in
      </button>
    </a>
  );
}

export default LoginButton;
