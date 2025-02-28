import React from 'react'
import Image from 'next/image'
import styles from '../../app/page.module.css'

const Logo = () => {
  return (

      <section className='flex justify-start items-center gap-2'>
        <Image src="/images/logo.png" alt="Carregando a logo S" className={styles.imgLogo} width={100} height={100}/>
        <h2 className='font-semibold'>Spleen AFX</h2>
      </section>
  )
}

export default Logo