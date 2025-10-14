import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-blue-400 px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <h1 className="text-xl sm:text-2xl font-bold text-blue-500">Raul Vieira</h1>

      {/* Botão hamburguer (visível só no celular) */}
      <button
        className="sm:hidden text-blue-400 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu desktop */}
      <ul className="hidden sm:flex gap-4">
        <li>
          <a
            href="#projects"
            className="px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
          >
            Sobre mim
          </a>
        </li>
      </ul>

      {/* Menu mobile (abre ao clicar no botão) */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-6 border-t border-blue-700 sm:hidden animate-fade-in">
          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
            >
              Sobre mim
            </a>
          </li>
        </ul>
      )}

      {/* Animação suave pra abrir o menu */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-in-out;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
