import React from 'react'
import styles from '../page.module.css'
import {Metadata} from 'next'

// import components
import Image from 'next/image'
import Input from '@/components/forms/Input';
import Button from '@/components/forms/Button';
import Logo from '@/components/logo/Logo';
import Link from 'next/link';

//Add title ro page
export const metadata: Metadata = {
    title: "Forgot | Spleen AFX",
    description: "Musicas online",
  };

export default function Forgot() {

  return (
    <main className=" container pt-10">


       <section className='flex justify-center items-center flex-wrap gap-10 w-full'>

         <section className='headTitle flex flex-col gap-8 md:w-2/5'>

          {/* section Logo */}
          <section className='flex justify-start items-center gap-2'>
            <Logo/>
          </section>

          {/* Add title */}
          <section className=''>
            <h3 className='font-medium text-4xl'>Perdeu sua senha!</h3>
          </section>

          {/* Add forms */}
          <form className='flex flex-col gap-3'>
            
              <div>
                  <label className='pb-2' htmlFor='name'>Email</label>
                  <Input id="name" placeholder="Digite Email da sua conta" type='email'/>
              </div>

              <Button>Verificar</Button>
              <div className='flex justify-center'>
                <Link href="/" className='text-sm text-gray-200 text-center'>Fazer login!</Link>
              </div>
          </form>
         </section>
        
        {/* Add headImg */}
        <section className='headImage hidden md:flex'>
          <Image src='/images/Group.svg' alt='Carregando a Headimage' width={100} height={100} className={styles.headImage}/>
        </section>

       </section>

    </main>
  );
}
