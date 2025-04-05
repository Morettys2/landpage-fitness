"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import tutor1 from "@/assets/tutor1.png";

const testimonials = [
  {
    content:
      "Comecei a treinar com esse curso e já vi resultados incríveis! A metodologia é clara e os treinos são super eficientes. Agora me sinto mais forte e motivado para seguir em frente!",
    author: "Carlos Almeida",
    role: "Aluno de musculação",
    image: tutor1,
  },
  {
    content:
      "Os programas de treino para emagrecimento realmente funcionam! Eu perdi peso de forma saudável e consegui manter a forma. Estou muito mais saudável e confiante.",
    author: "Fernanda Souza",
    role: "Aluna de emagrecimento",
    image: tutor1,
  },
  {
    content:
      "Eu nunca imaginei que poderia melhorar tanto minha flexibilidade. O curso de yoga foi transformador, tanto para o corpo quanto para a mente. Agora me sinto mais equilibrada.",
    author: "Juliana Pereira",
    role: "Aluna de yoga",
    image: tutor1,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">O que nossos alunos dizem</h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] px-4">
                  <article className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-4 transform transition-all hover:scale-105 hover:rounded-2xl">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-500">
                      <Image src={item.image} alt={item.author} width={96} height={96} className="object-cover rounded-full" />
                    </div>
                    <blockquote className="text-gray-700 text-lg italic">
                      <p>{item.content}</p>
                    </blockquote>
                    <div className="text-center">
                      <p className="font-bold text-gray-900">{item.author}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white p-3 rounded-full shadow-lg absolute left-0 -translate-y-1/2 top-1/2 transform hover:bg-gray-100 transition"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            className="bg-white p-3 rounded-full shadow-lg absolute right-0 -translate-y-1/2 top-1/2 transform hover:bg-gray-100 transition"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}

