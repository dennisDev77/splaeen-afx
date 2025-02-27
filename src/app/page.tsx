import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Input from '@/components/forms/Input';
import Button from '@/components/forms/Button';
import Checkbox from '@/components/forms/Checkbox'

export default function Login() {

  return (
    <main className=" container">


      {/* Section Forms */}
       <section className='flex justify-center items-center flex-wrap gap-28 w-full'>

         <section className='headTitle flex flex-col gap-8 border'>
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

              <label>
                <span className='pb-2'>Email Address</span>
                <Input type='email' placeholder="dennisdev@example.com"/>
              </label>

              <label>
                <span className='pb-2'>Password</span>
                <Input type='password' placeholder="Caracteres necessario"/>
              </label>
                      
                <label htmlFor="" className='flex justify-bettwen items-center text-sm space-x-2 cursor-pointer'> 
                  <Checkbox/>
                  <span> Mantenha me logado</span> 
                  <span> Forgot Password</span> 
                </label>

                <label htmlFor="" className='text-sm flex items-center space-x-2 cursor-pointer'> 
                 <Checkbox/>
                  <span> Eu aceito os <span className="text-color_yellow font-medium">Termos de uso </span> e <span className="text-color_yellow font-medium">Subscricoes</span> </span> 
                </label>

                <Button>Iniciar Seccao</Button>
            </form>
         </section>

        <section className='headImage border'>
          <Image src='/images/Group.svg' alt='Carregando a Headimage' width={100} height={100} className={styles.headImage}/>
        </section>

       </section>

    </main>
  );
}
