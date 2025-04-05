import Image from "next/image";
import about1Img from "@/assets/mateusmmd__1726413014_3457725439179975616_7278567533.webp";
import { Check, MessageCircle } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Imagem */}
          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={about1Img}
                alt="Imagem representativa do curso fitness"
                fill
                quality={100}
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-6 text-gray-800" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold text-gray-900">Sobre o Curso</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Transforme sua rotina de treinos com nosso curso exclusivo! Metodologia eficaz, suporte especializado e um plano completo para ajudar você a atingir seus objetivos com segurança e eficiência.
            </p>

            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <Check className="text-green-600 w-5 h-5" />
                Instrutores certificados e experientes.
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-600 w-5 h-5" />
                Acesso vitalício ao conteúdo.
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-600 w-5 h-5" />
                Suporte exclusivo via WhatsApp.
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-600 w-5 h-5" />
                Certificado de conclusão reconhecido.
              </li>
            </ul>

            {/* Botão de contato */}
            <a
              target="_blank"
              href="https://wa.me/553598918338?text=Olá! Estou interessado no curso de fitness e gostaria de mais informações."
              className="bg-green-600 text-white flex items-center gap-3 px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300 w-fit"
            >
              <WhatsappLogo className="w-6 h-6" />
              Fale com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

