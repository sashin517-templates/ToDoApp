import React from 'react'
import Lock from '../assets/icons/Lock.png'

function InputPassword() {
  return (
    <div class="flex justify-center items-center font-montserrat text-xs bg-slate-50 h-[50px] w-[24rem] rounded-3xl shadow-md px-4 focus-within:outline focus-within:outline-2 focus-within:outline-PrimePurple">
    <img src={Lock} alt="email-icon" class="h-6 w-6 mr-2" />
    <input 
        type="password" 
        placeholder="Password" 
        class="flex-grow bg-slate-50 outline-none text-sm placeholder-gray-500"
    />
</div>


  )
}

export default InputPassword