import React from 'react'
import { ReactNode } from 'react'

interface Props{
    children:ReactNode
}

const Button = ({children}:Props) => {
  return (
    <button className='flex justify-center items-center gap-2 text-color_blue bg-color_yellow py-2 px-2 rounded-md font-medium'>
      {children}
    </button>
  )
}

export default Button
