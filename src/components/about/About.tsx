import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white flex flex-col items-center px-20 -mt-80" // reduzimos o padding vertical
    >
      <h2 className="text-4xl font-bold text-blue-500 mb-5">Sobre Mim</h2> {/* menor margin-bottom */}

      <div className="max-w-5xl text-center">
        <p className="text-gray-300 mb-4">
          Olá! Meu nome é Raul Vieira e estou em busca da minha primeira oportunidade como desenvolvedor.
          Recentemente, me formei no curso JavaScript Full Stack da Generation Brasil e possuo conhecimentos em React, TypeScript, SQL e Linux.
          Sou apaixonado por tecnologia, desde games até desenvolvimento.
        </p>
        <p className="text-gray-300 mb-4">
          Durante meus estudos, desenvolvi projetos com React, NestJS e Node.js,
          e estou sempre em busca de aprimorar minhas habilidades e experimentar novas tecnologias.
        </p>
        <p className="text-gray-300 mb-6">
          Meu objetivo é me tornar um desenvolvedor profissional, aprendendo constantemente e contribuindo para projetos desafiadores no mundo digital.
        </p>

        <h2 className="text-4xl font-bold text-blue-500 mb-5">Contatos</h2> {/* menor margin-bottom */}

        {/* Contato com ícones */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:raul.vieiras2001@gmail.com"
            className="flex items-center gap-1 text-blue-500 hover:underline"
          >
            <FaEnvelope size={25} /> Email
          </a>
          <a
            href="https://wa.me/5511962118855"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-500 hover:underline"
          >
            <FaWhatsapp size={25} /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/raul-vieiradev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-700 hover:underline"
          >
            <FaLinkedin size={25} /> LinkedIn
          </a>
          <a
            href="https://github.com/RaulVieira007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-300 hover:text-white"
          >
            <FaGithub size={25} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
