"use client";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo e descrição */}
        <div className="flex flex-col items-start md:items-center text-center md:text-left">
          <h3 className="text-3xl font-bold text-green-400">MMD ESPORTES</h3>
          <p className="mt-2 text-gray-400 max-w-md mx-auto md:mx-0">
            Transformando sua saúde com dedicação e treinos eficazes.
          </p>
          <a
            href="#"
            className="mt-4 inline-block bg-green-500 hover:bg-green-600 transition px-6 py-2 rounded-lg font-semibold"
          >
            Contato via WhatsApp
          </a>
        </div>

        {/* Contatos */}
        <div className="flex flex-col items-start md:items-center text-center md:text-left space-y-4">
          <h3 className="text-xl font-semibold">Contato</h3>
          <div className="flex items-center gap-2 text-gray-400">
            <Mail className="w-5 h-5 text-green-400" />
            <p>mmdesportesdeendurance@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Phone className="w-5 h-5 text-green-400" />
            <p>(35) 12318-31238</p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-start md:items-center text-center md:text-left space-y-4">
          <h3 className="text-xl font-semibold">Redes Sociais</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <FacebookLogo className="w-8 h-8" />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <InstagramLogo className="w-8 h-8" />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <YoutubeLogo className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MMD ESPORTES. Todos os direitos reservados.
      </div>
    </footer>
  );
}

