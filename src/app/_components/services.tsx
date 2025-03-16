"use client";
import { Bicycle, Timer, Clock } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import { Apple, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Treinamento para Maratonas",
    description:
      "Plano especializado para melhorar sua resistência e desempenho em provas de longa distância.",
    type: "corrida",
    duration: "1h30",
    price: "R$150",
    icon: <Timer />,
    linkText: "Olá, vi no site sobre Treinamento para Maratonas e gostaria de mais informações.",
  },
  {
    title: "Corrida de Endurance",
    description:
      "Estratégias e treinos específicos para aumentar sua resistência e superar seus limites.",
    type: "corrida",
    duration: "1h",
    price: "R$120",
    icon: <Timer />,
    linkText: "Olá, vi no site sobre Corrida de Endurance e gostaria de mais informações.",
  },
  {
    title: "Ciclismo de Longa Distância",
    description:
      "Treinos voltados para melhorar sua performance em provas de ciclismo de resistência.",
    type: "ciclismo",
    duration: "2h",
    price: "R$180",
    icon: <Bicycle />,
    linkText: "Olá, vi no site sobre Ciclismo de Longa Distância e gostaria de mais informações.",
  },
  {
    title: "Nutrição para Atletas",
    description:
      "Plano alimentar personalizado para otimizar sua energia e recuperação nos treinos e provas.",
    type: "nutrição",
    duration: "1h",
    price: "R$100",
    icon: <Apple />,
    linkText: "Olá, vi no site sobre Nutrição para Atletas e gostaria de mais informações.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [filter, setFilter] = useState("");

  const handleFilterChange = (type: string) => {
    setFilter(type);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nossos Serviços</h2>

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button
            className={`px-4 py-2 rounded-md ${filter === "" ? "bg-green-600 text-white" : "text-gray-700"}`}
            onClick={() => handleFilterChange("")}
          >
            Todos
          </button>
          <button
            className={`px-4 py-2 rounded-md ${filter === "corrida" ? "bg-green-600 text-white" : "text-gray-700"}`}
            onClick={() => handleFilterChange("corrida")}
          >
            Corrida
          </button>
          <button
            className={`px-4 py-2 rounded-md ${filter === "ciclismo" ? "bg-green-600 text-white" : "text-gray-700"}`}
            onClick={() => handleFilterChange("ciclismo")}
          >
            Ciclismo
          </button>
          <button
            className={`px-4 py-2 rounded-md ${filter === "nutrição" ? "bg-green-600 text-white" : "text-gray-700"}`}
            onClick={() => handleFilterChange("nutrição")}
          >
            Nutrição
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carrossel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services
                .filter((item) => item.type === filter || filter === "")
                .map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] px-4">
                    <article className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 flex flex-col transition-transform duration-300 hover:scale-105">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl text-green-600">{item.icon}</span>
                        <div>
                          <h3 className="font-semibold text-xl">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                      <div className="mt-4 border-t border-gray-300 pt-4 flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-700">
                          <Clock className="w-4 h-4" />
                          <span className="ml-2">{item.duration}</span>
                        </div>
                        <a
                          target="_blank"
                          href={`https://wa.me/553598918338?text=${encodeURIComponent(item.linkText)}`}
                          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                        >
                          Contato
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            className="bg-white p-3 rounded-full shadow-lg absolute left-0 -translate-y-1/2 top-1/2 transform hover:bg-gray-200 transition"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            className="bg-white p-3 rounded-full shadow-lg absolute right-0 -translate-y-1/2 top-1/2 transform hover:bg-gray-200 transition"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}

