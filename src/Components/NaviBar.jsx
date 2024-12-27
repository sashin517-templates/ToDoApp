import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../Components/ThemeContext'
import LightIcon from '/sun.svg'
import DarkIcon from '/moon.svg'

const NaviBar = () => {

  const { theme, toggleTheme } = useTheme();
  const [ activeTab, setActiveTab ] = React.useState('home');

  return (
    <>
      <div className="flex justify-evenly items-center h-16 w-dvw dark:bg-dtf bg-ltf text-black dark:text-white" >
        <div>
          <img className='h-6' src="/Vector.png" alt="Logo" />
        </div>
        <div className='list-none flex justify-center items-center w-auto h-full '>
          <NavLink className={({isActive}) => isActive ? 'bg-primary2 flex items-center h-full w-auto text-white font-semibold text-xl px-10' : 'flex items-center bg-transparent hover:dark:bg-primary2 hover:bg-white h-full w-auto text-xl font-medium px-10'} to="/home">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? 'bg-primary2 flex items-center h-full w-auto text-white font-semibold text-xl px-10' : 'flex items-center bg-transparent hover:dark:bg-primary2 hover:bg-white h-full w-auto text-xl font-medium px-10'} to="/tasks">Tasks</NavLink>
          <NavLink className={({isActive}) => isActive ? 'bg-primary2 flex items-center h-full w-auto text-white font-semibold text-xl px-10' : 'flex items-center bg-transparent hover:dark:bg-primary2 hover:bg-white h-full w-auto text-xl font-medium px-10'} to="/events">Events</NavLink>
          <NavLink className={({isActive}) => isActive ? 'bg-primary2 flex items-center h-full w-auto text-white font-semibold text-xl px-10' : 'flex items-center bg-transparent hover:dark:bg-primary2 hover:bg-white h-full w-auto text-xl font-medium px-10'} to="/profile">Profile</NavLink>
        </div>
        <div className='flex justify-center items-center w-auto gap-5'>
          <button className={"flex justify-between items-center"} onClick={toggleTheme}>
            <img className="w-10" src={theme === 'light' ? DarkIcon : LightIcon} alt="icon" />
          </button>
          <a href='/profile' className='flex items-center p-1 bg-primary2 rounded-full'><img src="/UserCircleLight.svg" alt="" /></a>
          <a href='/login' className='flex items-center gap-2 px-3 bg-red text-white rounded-2xl text-sm'>Log Out <img src="/CombinedShape.svg" alt="" /></a>
        </div>
      </div>
      </>
  )
}

export default NaviBar
