import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Divider } from "@heroui/react";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#2c4d71" }}
      className="relative text-white py-12 px-6"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Row 1: Logo and copyright */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative p-2 bg-white rounded-full shadow-inner mt-6">
              {/* <Image src="/unam-logo.png" alt="UNAM Logo" width={50} height={50} className="object-contain" /> */}
            </div>
            <h3 className="text-xl font-bold text-white mt-6">UNAM</h3>
          </div>

          <p className="text-sm text-blue-100 mt-4">
            © {new Date().getFullYear()} Universidad Nacional Autónoma de
            México. Todos los derechos reservados.
          </p>
        </div>

        {/* Divider between rows */}
        <Divider className="bg-white" />

        {/* Row 2: Links in horizontal layout with dividers */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Facultades */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4 text-white">Facultades</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Ingeniería
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Medicina
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Derecho
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Filosofía y Letras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Ciencias
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:flex items-center">
            <Divider orientation="vertical" className="h-40 bg-white mx-6" />
          </div>

          {/* Información */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4 text-white">Información</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Sobre la UNAM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Reglamentos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Bibliotecas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Calendario Escolar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:flex items-center">
            <Divider orientation="vertical" className="h-40 bg-white mx-6" />
          </div>

          {/* Redes Sociales */}
          <div className="md:w-1/3">
            <h4 className="text-lg font-bold mb-4 text-white">
              Redes Sociales
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#"
                className="bg-[#1a3b68] p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#1a3b68] p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#1a3b68] p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#1a3b68] p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Youtube size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-[#1a3b68] p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin size={20} className="text-white" />
              </a>
            </div>

            <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-600 transition-all duration-200 shadow-lg">
              Solicita información
            </button>
          </div>
        </div>

        {/* Divider between rows */}
        <Divider className="my-6 bg-white" />

        {/* Row 3: Bottom links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>La Universidad de la Nación</p>
          <div className="flex h-5 items-center space-x-4 mt-4 md:mt-0">
            <div>
              <a href="#" className="hover:text-blue-200">
                Aviso de Privacidad
              </a>
            </div>
            <Divider orientation="vertical" className="bg-white" />
            <div>
              <a href="#" className="hover:text-blue-200">
                Términos y Condiciones
              </a>
            </div>
            <Divider orientation="vertical" className="bg-white" />
            <div>
              <a href="#" className="hover:text-blue-200">
                Mapa del Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
