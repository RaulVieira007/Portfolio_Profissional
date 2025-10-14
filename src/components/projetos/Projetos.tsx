function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-950 text-white flex flex-col items-center px-6 py-16 sm:py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-8 md:mb-10 text-center">
        Projetos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-gray-900 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300 text-center sm:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-3">
            Site Delivery
          </h3>
          <p className="text-gray-300 mb-4 text-sm md:text-base">
            Aplicação full stack desenvolvida com React, Node.js e SQL para gerenciar pedidos de delivery.
          </p>
          <a
            href="https://projeto-integrador-delivery-front.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ver Site →
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300 text-center sm:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-3">
            Projeto BlogPessoal
          </h3>
          <p className="text-gray-300 mb-4 text-sm md:text-base">
            Projeto Full Stack desenvolvido com NestJS e React durante o curso da Generation Brasil.
          </p>
          <a
            href="https://github.com/RaulVieira007/blogpessoal_nest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ver no GitHub →
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300 text-center sm:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-3">
            Loja de Jogos
          </h3>
          <p className="text-gray-300 mb-4 text-sm md:text-base">
            CRUD completo desenvolvido com NestJS para o gerenciamento de uma Loja de Games, com foco nas entidades Jogos e Categorias.
          </p>
          <a
            href="https://github.com/RaulVieira007/LeveUP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ver no GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
