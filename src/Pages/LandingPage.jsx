import React from "react";
import NaviBar from "../Components/NaviBar";
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'

function LandingPage() {
  return (
    <div>
        <NaviBar />
        <h1 className='text-red-500 font-bold'>Landing Page</h1>
    </div>
  );
}

export default LandingPage;
