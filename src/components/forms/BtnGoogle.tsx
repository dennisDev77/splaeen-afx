import React from 'react'
import { ReactNode } from 'react';

interface Props{
   children:ReactNode,
   onClick?:()=>void //Permite receber onClick
}

const BtnGoogle = ({children, onClick}:Props) => {
  return (

    <button className='flex justify-center items-center gap-2' onClick={onClick}>
      {children}
    </button>
  )
}

export default BtnGoogle
