function Navbar() {
  return (
    <nav className="bg-black text-blue-400 px-6 py-4 flex justify-center items-center gap-8 shadow-md fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold text-blue-500">Raul Vieira</h1>
      <ul className="flex gap-4">
        <li>
          <a
            href="#projects"
            className="px-5 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="px-5 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="px-5 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
          >
            Sobre mim
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
