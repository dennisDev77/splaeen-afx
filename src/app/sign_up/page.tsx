import React from 'react'
import styles from '../page.module.css'
import {Metadata} from 'next'

// import components
import Image from 'next/image'
import Input from '@/components/forms/Input';
import Button from '@/components/forms/Button';
import Checkbox from '@/components/forms/Checkbox'
import Logo from '@/components/logo/Logo';
import Link from 'next/link';

//Add title ro page
export const metadata: Metadata = {
  title: "Forgot | Spleen AFX",
  description: "Musicas online",
};

export default function SignUp() {

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
            <h3 className='font-medium text-4xl'>Ola, Seja bem-vndo</h3>
            <p className='font-ligth text-sm pt-1'>Aproveite da melhor colecao de musica, entre agora</p>
          </section>

          {/* Add forms */}
          <form className='flex flex-col gap-3'>
            
              <div>
                  <label className='pb-2' htmlFor='name'>Username</label>
                  <Input id="name" placeholder="Seu nome" type='email'/>
              </div>
              <div>
                  <label className='pb-2' htmlFor='email'>Email Address</label>
                  <Input id="email" placeholder="dennisdev@example.com" type='email'/>
              </div>

              <div>
                  <label className='pb-2' htmlFor='password'>Password</label>
                  <Input id="password" placeholder="8+ Caracteres necessario"  type='password'/>
              </div>

              <div className='flex justify-between items-center text-sm gap-2 cursor-pointer'>
                  <span className='flex gap-2'>
                  <Checkbox type="checkbox" id="termos"/>
                  <label htmlFor="termos"> 
                  <span> Eu aceito os <span className="text-color_yellow font-medium">Termos de uso </span> e <span className="text-color_yellow font-medium">Subscricoes</span> </span>
                  </label>   
                  </span>
              </div>  

              <Button>Concluir</Button>
              <div className='flex justify-center'>
                <Link href="/" className='text-sm text-gray-200 text-center'>Ja tenho uma conta!</Link>
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
