function Home() {
  return (
 <section
  id="home"
  className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row items-center justify-center md:justify-evenly px-6 md:px-100 pt-10 text-center md:text-left"
>
  {/* 🖼️ Lado esquerdo - imagem */}
  <div className="w-full md:w-[45%] flex justify-center mb-8 md:mb-0">
    <img
      src="https://i.pinimg.com/736x/de/76/5c/de765cb2ba24b466320a3777cd14a197.jpg"
      alt="Raul Vieira"
      className="rounded-2xl shadow-[0_0_25px_#3b82f6] hover:scale-105 transition-transform duration-500 w-[230px] md:w-[280px] h-auto"
    />
  </div>

  {/* ✍️ Lado direito - texto e botões */}
  <div className="w-full md:w-[45%] flex justify-center relative">
    <div className="relative flex flex-col items-center md:items-start gap-5 p-4 md:p-6 z-10">
      {/* Círculos girando */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[220px] md:w-[280px] h-[220px] md:h-[280px] rounded-full border border-blue-500/30 animate-spin-slow"></div>
        <div className="absolute w-[300px] md:w-[350px] h-[300px] md:h-[350px] rounded-full border border-purple-500/20 animate-spin-slower"></div>
        <div className="absolute w-[380px] md:w-[420px] h-[380px] md:h-[420px] rounded-full border border-cyan-500/10 animate-spin-slow"></div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-blue-500 z-10">Raul Vieira</h1>
      <p className="text-gray-300 max-w-md z-10">
        Desenvolvedor Full Stack apaixonado por tecnologia, código limpo e interfaces modernas.
      </p>

      <div className="flex gap-3 mt-3 z-10">
        <a
          href="CV_Raul_Vieira.pdf"
          download
          className="px-4 py-2 bg-transparent border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          Download Currículo
        </a>
        <a
          href="#about"
          className="px-4 py-2 bg-transparent border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          Contato
        </a>
      </div>
    </div>
  </div>
</section>
  );
}

export default Home;
