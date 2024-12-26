import React from 'react'

function NaviBar() {
  return (
    <>
      <div className='flex justify-evenly items-center h-16 w-dvw bg-ltf'>
        <div>
          <img className='h-6' src="/Vector.png" alt="Logo" />
        </div>
        <div className='list-none flex justify-center items-center gap-16 w-auto h-full '>
          <a className='flex items-center hover:bg-white h-full w-auto' href="/home"><li className='text-xl px-2'>Home</li></a>
          <a className='flex items-center hover:bg-white h-full w-auto' href="/home"><li className='text-xl px-2'>Tasks</li></a>
          <a className='flex items-center hover:bg-white h-full w-auto' href="/home"><li className='text-xl px-2'>Events</li></a>
          <a className='flex items-center hover:bg-white h-full w-auto' href="/home"><li className='text-xl px-2'>Profile</li></a>

        </div>
        <div className='flex justify-center w-auto gap-5'>
          <a href='/profile' className='flex items-center p-1 bg-primary2 rounded-full'><img src="/UserCircleLight.svg" alt="" /></a>
          <a href='/login' className='flex items-center gap-2 px-3 bg-red text-white rounded-2xl text-sm'>Log Out <img src="/CombinedShape.svg" alt="" /></a>
        </div>
      </div>
    </>
  )
}

export default NaviBar
