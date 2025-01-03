<<<<<<< HEAD
import React from 'react'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'
import LoginButton from './LoginButton'
import LoginWithGoogle from './LoginWithGoogle'
=======
import React from "react";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import LoginButton from "./LoginButton";
import LoginWithGoogle from "./LoginWithGoogle";
>>>>>>> main

function LoginCard() {
  return (
    <div className="flex flex-col justify-center items-center w-[30rem] h-[32rem] p-5 shadow-custom backdrop-blur-md border border-custom bg-blendPurple  dark:bg-primary2 rounded-lg bg-p">
      <ul className="flex flex-col justify-center items-center gap-10 ">
<<<<<<< HEAD
        <li><h1 className="text-5xl text-PrimePurple font-montserrat dark:text-white">LOGIN</h1></li>
=======
        <li>
          <h1 className="text-5xl text-PrimePurple font-montserrat dark:text-white">
            LOGIN
          </h1>
        </li>
>>>>>>> main
        <li>
          <div className="flex flex-col justify-center items-center gap-4">
            <InputEmail />
            <InputPassword />
            <LoginButton />
          </div>
        </li>
        <li className="flex text-sm font-montserrat text-black dark:text-white">
          <hr className="w-1/3" />
          <span className="mx-3 text-black">OR</span>
        </li>
        <li className="">
<<<<<<< HEAD
          <LoginWithGoogle/>
        </li>
      </ul>
    </div>
  )
}

export default LoginCard
=======
          <LoginWithGoogle />
        </li>
      </ul>
    </div>
  );
}

export default LoginCard;
>>>>>>> main
