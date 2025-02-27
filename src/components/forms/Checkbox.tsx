import React from 'react'

interface check{
  type:string,
  id:string
}
const Checkbox = ({type, id}:check) => {
  return (
    <input type={type} id={id} 
    className='w-5 h-5 accent-color_yellow' 
    />
  )
}

export default Checkbox
