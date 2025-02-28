import React from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <main>
        <header>
            <input type="search" />
            <div>
                <Image src='/images/Group.svg' alt='Carregando a Headimage' height={100} width={100} className='w-12 h-12'/>
                <article className='border'>
                    <div>
                        <span>Dinis Camela</span>
                        <span>Email</span>
                    </div>
                    <span>
                    <IoIosArrowDown/>
                    </span>
                </article>
            </div>
        </header>
    </main>
  )
}

export default Header
