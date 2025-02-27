import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';

// import components
import Image from 'next/image'
import Input from '@/components/forms/Input';
import Button from '@/components/forms/Button';
import Checkbox from '@/components/forms/Checkbox'
import BtnGoogle from '@/components/forms/BtnGoogle'

export default function Login() {

  return (
    <main className=" container">


      {/* Section Forms */}
       <section className='flex justify-center items-center flex-wrap gap-10 w-full'>

         <section className='headTitle flex flex-col gap-8 w-2/5'>
          {/* section Logo */}
          <section className='flex justify-start items-center gap-2'>
            <Image src="/images/logo.png" alt="Carregando a logo S" className={styles.imgLogo} width={100} height={100}/>
            <h2 className='font-semibold'>Spleen AFX</h2>
          </section>

          <section className=''>
            <h3 className='font-medium text-4xl'>Ola, Seja bem-vndo</h3>
            <p className='font-ligth text-sm pt-1'>Aproveite da melhor colecao de musica, entre agora</p>
          </section>

            <form className='flex flex-col gap-3'>
              
                <div>
                    <label className='pb-2' htmlFor='email'>Email Address</label>
                    <Input id="email" placeholder="dennisdev@example.com" type='email'/>
                </div>

                <div>
                    <label className='pb-2' htmlFor='password'>Email Address</label>
                    <Input id="password" placeholder="8+ Caracteres necessario"  type='password'/>
                </div>

                <div className='flex justify-between items-center text-sm gap-2 cursor-pointer'>
                    <span className='flex gap-2 cursor-pointer'>
                    <Checkbox type="checkbox" id="logado"/>
                    <label htmlFor="logado"> Mantenha Logado</label>   
                    </span>

                    <Link href="/" className='ml-4 text-color_yellow font-medium'> Forgot Password</Link> 
                </div>  

                <div className='flex justify-between items-center text-sm gap-2 cursor-pointer'>
                    <span className='flex gap-2'>
                    <Checkbox type="checkbox" id="termos"/>
                    <label htmlFor="termos"> 
                    <span> Eu aceito os <span className="text-color_yellow font-medium">Termos de uso </span> e <span className="text-color_yellow font-medium">Subscricoes</span> </span>
                    </label>   
                    </span>
                </div>  

                <Button>Iniciar Seccao</Button>
                <BtnGoogle/>
            </form>
         </section>

        <section className='headImage'>
          <Image src='/images/Group.svg' alt='Carregando a Headimage' width={100} height={100} className={styles.headImage}/>
        </section>

       </section>

    </main>
  );
}
