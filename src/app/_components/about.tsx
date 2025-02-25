import Image from "next/image";
import about1Img from '../../../public/about-1.png';
import about2Img from '../../../public/about-2.png';
import { Check } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Imagem representativa do curso fitness"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">SOBRE O CURSO</h2>

            <p>
              Nosso curso foi criado para transformar sua rotina de treinos. Com uma metodologia exclusiva e suporte de especialistas, você terá tudo o que precisa para alcançar seus objetivos de forma eficiente e saudável.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Instrutores certificados e experientes.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Acesso vitalício ao conteúdo.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Suporte exclusivo via WhatsApp.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Certificado de conclusão reconhecido.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target='_blank'
                href={`https://wa.me/553598918338?text=Olá! Estou interessado no curso de fitness e gostaria de mais informações.`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
