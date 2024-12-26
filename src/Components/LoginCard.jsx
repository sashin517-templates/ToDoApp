import React from 'react'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'
import LoginButton from './LoginButton'
import LoginWithGoogle from './LoginWithGoogle'

function LoginCard() {
  return (
    <div className='flex flex-col justify-center items-center w-[30rem] h-[32rem] p-5  bg-customPurple rounded-lg bg-p'>
        <ul className='flex flex-col justify-center items-center gap-5'>
            <li><div className="flex flex-col justify-center items-center gap-4">
              <InputEmail/>
              <InputPassword/>
              <LoginButton/>
              </div></li>
            <li className='text-sm font-montserrat'>OR</li>
            <li className=''><LoginWithGoogle/></li>
        </ul>
    </div>
  )
}

export default LoginCard