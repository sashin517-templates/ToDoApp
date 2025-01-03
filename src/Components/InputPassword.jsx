import React from 'react'
<<<<<<< HEAD
import Lock from '../assets/icons/Lock.png'
=======
import Lock from '../../public/Lock copy.png'
>>>>>>> main

function InputPassword() {
  return (

    <div class="flex justify-center items-center font-montserrat text-xs shadow-custom backdrop-blur-md border border-custom bg-lightBlendPurple h-[50px] w-[24rem] rounded-3xl shadow-md px-4 focus-within:outline focus-within:outline-2 focus-within:outline-PrimePurple">
      <img src={Lock} alt="email-icon" class="h-6 w-6 mr-2" />
      <input
        type="password"
        placeholder="Password"
        class="flex-grow font-subtle placeholder-lightPlusBlendPurple bg-transparent outline-none text-sm  placeholder:transparent"
        required
        autoComplete="off"
      />
    </div>
  );
}

export default InputPassword