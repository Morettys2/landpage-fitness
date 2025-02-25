"use client";
import Image from 'next/image';
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';

export function Footer() {
  return (
    <section className="bg-[#858585] py-16 text-white"> 
      <div className='container mx-auto px-4'>
        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5 items-start'>
          <div className='flex flex-col items-start'>
            <h3 className='text-2xl font-semibold mb-2'>MMD ESPORTES</h3>
            <p className='mb-4'>Transformando sua saúde com dedicação e treinos eficazes.</p>
            <a
              href="#"
              className='bg-green-500 px-4 py-2 rounded-md'
            >
              Contato via WhatsApp
            </a>
          </div>
          <div className='flex flex-col items-start'>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: mmdesportesdeendurance@gmail.com</p>
            <p>Telefone: (35) 1231831238</p>
          </div>
          <div className='flex flex-col items-start'>
            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
            <div className='flex gap-4'>
              <a href="#" target='_blank'>
                <FacebookLogo className='w-8 h-8' />
              </a>
              <a href="#" target='_blank'>
                <InstagramLogo className='w-8 h-8' />
              </a>
              <a href="#" target='_blank'>
                <YoutubeLogo className='w-8 h-8' />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}


