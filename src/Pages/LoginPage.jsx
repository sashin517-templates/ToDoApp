import React from 'react'
import NaviBar from '../Components/NaviBar'
import LoginCard from '../Components/LoginCard'

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh] dark:bg-dtb bg-login-bg bg-cover">      
      <LoginCard />
    </div>
  )
}

export default LandingPage