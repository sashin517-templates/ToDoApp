import React from 'react'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'

function LoginCard() {
  return (
    <div className='flex flex-col justify-center items-center w-[30rem] h-[32rem] p-5  bg-customPurple rounded-lg bg-p'>
        <ul>
            <li className='m-4'><InputEmail/></li>
            <li className='m-4'><InputPassword/></li>
        </ul>
    </div>
  )
}

export default LoginCard