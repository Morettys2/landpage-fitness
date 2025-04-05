import { WhatsappLogo } from '@phosphor-icons/react';
import Image from 'next/image';
import dogImg from '@/assets/mateusmmd__1726413014_3457725439179975616_7278567533.webp';

export function Hero() {
    return (
        <section className="bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={dogImg}
                    alt="Dog"
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative z-10'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='space-y-6'>
                        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10">
                            Transforme seu corpo com treinos eficazes e acompanhamento especializado.
                        </h1>
                        <p className="lg:text-lg">
                            Descubra métodos inovadores para atingir seus objetivos de forma saudável e eficiente.
                        </p>

                        <div className="flex">
                            <a
                                href="#"
                                className="bg-[#00A859] hover:bg-[#008F4F] px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2 shadow-lg"
                            >
                                <WhatsappLogo className='w-5 h-5' />
                                Contato via WhatsApp
                            </a>
                        </div>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira inscrição.
                            </p>
                        </div>
                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image
                            src={dogImg}
                            alt="Dog"
                            fill
                            sizes='(max-width: 768px) 0vw, 50vw'
                            className='object-contain'
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>
        </section>
    );
}

