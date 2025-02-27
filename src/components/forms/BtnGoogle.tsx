import React from 'react'

// import icons
import { FcGoogle } from "react-icons/fc";

const BtnGoogle = () => {
  return (
    <button className='flex justify-center items-center gap-2'>
    <span className='text-4xl flex justify-center items-cente'>
        <FcGoogle/>
    </span>
    <span className='text-base font-medium'>Logar com Google</span>
    </button>
  )
}

export default BtnGoogle
