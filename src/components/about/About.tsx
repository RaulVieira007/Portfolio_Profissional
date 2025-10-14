import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white flex flex-col items-center px-6 pt-32 pb-16 sm:px-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-6">
        Sobre Mim
      </h2>

      <div className="max-w-3xl text-center">
        <p className="text-gray-300 mb-4 text-sm sm:text-base">
          Olá! Meu nome é Raul Vieira e estou em busca da minha primeira oportunidade como desenvolvedor.
          Recentemente, me formei no curso JavaScript Full Stack da Generation Brasil e possuo conhecimentos em React, TypeScript, SQL e Linux.
          Sou apaixonado por tecnologia, desde games até desenvolvimento.
        </p>

        <p className="text-gray-300 mb-4 text-sm sm:text-base">
          Durante meus estudos, desenvolvi projetos com React, NestJS e Node.js,
          e estou sempre em busca de aprimorar minhas habilidades e experimentar novas tecnologias.
        </p>

        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Meu objetivo é me tornar um desenvolvedor profissional, aprendendo constantemente e contribuindo para projetos desafiadores no mundo digital.
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-5">
          Contatos
        </h2>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=raul.vieiras2001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            <FaEnvelope size={22} /> Email
          </a>
          <a
            href="https://wa.me/5511962118855"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-500 hover:underline"
          >
            <FaWhatsapp size={22} /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/raul-vieiradev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:underline"
          >
            <FaLinkedin size={22} /> LinkedIn
          </a>
          <a
            href="https://github.com/RaulVieira007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <FaGithub size={22} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
