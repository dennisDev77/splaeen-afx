import React from 'react'
import styles from './forms.module.css'

const Input = ({...props}) => {
  return (
    <>
        <input {...props} className={`${styles.input} py-2 px-2 bg-transparent rounded-md`}/>
    </>
  )
}

export default Input
