import React from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <main className='py-4'>
        <header className='flex justify-between items-center gap-20'>

            <section className=' w-full flex items-center relative'>
                <input type="search" placeholder='Pesquisar album, musica ou artista' className=' text-base py-2 px-4 rounded-md text-gray-700 bg-gray-50'/>
                
                <span className='text-2xl absolute text-gray-700 right-1 bg-gray-50 p-2 px-1 cursor-pointer'>
                    <IoSearchOutline/>
                </span>
            </section>

            <section className='flex justify-center items-center gap-2'>
                <Image src='/images/profile.png' alt='Carregando a Headimage' height={100} width={100} className='w-12 h-12'/>

                <article className=' flex justify-center items-center gap-2'>

                    <div className='flex flex-col'>
                        <span className='text-md'>Dinis Camela</span>
                        <span className='text-sm'>dennisca@gmail.com</span>
                    </div>

                    <span className='font-extrabold'>
                    <IoIosArrowDown/>
                    </span>

                </article>
            </section>
        </header>
    </main>
  )
}

export default Header
