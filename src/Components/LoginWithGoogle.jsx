import React from 'react'
import Google from '../assets/icons/google-svgrepo-com.svg'

function LoginWithGoogle() {
  return (
    <a href='#' id='login-google' className="flex justify-center items-center font-montserrat text-base text-slate-50 bg-PrimePurple py-2.5 px-9 rounded-lg"><img src={Google} alt="email-icon" class="h-6 w-6 mr-2" /> Log in with Google</a>
  )
}

export default LoginWithGoogle