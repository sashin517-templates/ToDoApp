import React from 'react'
import LoginCard from '../Components/LoginCard'

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('../../public/Sign_In_V2.svg')] bg-cover bg-center h-screen">      
      <LoginCard />
    </div>
  )
}

export default LandingPage