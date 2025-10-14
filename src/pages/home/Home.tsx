function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 text-white flex items-center justify-between px-100 pt-10"
    >
      {/* 🖼️ Lado esquerdo - imagem */}
      <div className="w-1/2 flex justify-center">
        <img
          src="https://i.pinimg.com/736x/de/76/5c/de765cb2ba24b466320a3777cd14a197.jpg"
          alt="Raul Vieira"
          className="rounded-2xl shadow-[0_0_30px_#3b82f6] hover:scale-105 transition-transform duration-500 max-w-[300px] h-auto"
        />
      </div>

      {/* ✍️ Lado direito - texto e botões */}
      <div className="w-1/2 flex justify-center relative">
        <div className="relative flex flex-col items-start gap-6 p-10 z-10">
          {/* Círculos girando */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[320px] h-[320px] rounded-full border border-blue-500/30 animate-spin-slow"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/20 animate-spin-slower"></div>
            <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10 animate-spin-slow"></div>
          </div>

          <h2 className="text-4xl font-bold text-blue-500">Raul Vieira</h2>
          <p className="text-lg text-gray-300 max-w-md">
            Desenvolvedor Full Stack apaixonado por tecnologia, código limpo e interfaces modernas.
          </p>

          {/* 💎 Efeito luminoso acima dos botões */}
          <div className="relative w-full flex flex-col items-center z-10">
            <div className="absolute -top-1 w-[220px] h-[40px] rounded-2xl animate-pulse-glow"></div>

            <div className="flex gap-4 mt-4">
              <a
                href="/CV_Raul_Vieira.pdf"
                download="CV_Raul_Vieira.pdf"
                className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
              >
                Download Currículo
              </a>

              <a
                href="#about"
                className="px-12 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
