import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaGithub,
} from "react-icons/fa";

const skills = [
  { icon: <FaReact size={40} color="#61DAFB" />, name: "React" },
  { icon: <FaNodeJs size={40} color="#68A063" />, name: "Node.js" },
  { icon: <FaJs size={40} color="#F7DF1E" />, name: "JavaScript / TypeScript" },
  { icon: <FaDatabase size={40} color="#60A5FA" />, name: "SQL / Banco de Dados" },
  { icon: <FaHtml5 size={40} color="#E44D26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS3 / TailwindCSS" },
  { icon: <FaLinux size={40} color="#FFF" />, name: "Linux / Bash" },
  { icon: <FaGithub size={40} color="#FFF" />, name: "GitHub / Versionamento" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-950 text-white flex flex-col items-center px-4 sm:px-8 md:px-12 py-12 md:py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-8 md:mb-10 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-3 group overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <p className="text-gray-200 text-sm sm:text-base font-medium text-center">
              {skill.name}
            </p>

            {/* 🎵 Equalizer animado */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between h-6 px-4 sm:px-6">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="flex-1 mx-0.5 bg-gradient-to-t from-blue-500 via-purple-60 to-pink-760 rounded-sm animate-equalizer"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                  }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🔊 Keyframes para o equalizer animado */}
      <style>
        {`
          @keyframes equalizer {
            0%, 100% { transform: scaleY(0.2); filter: brightness(0.7); }
            25% { transform: scaleY(1.2); filter: brightness(1.4); }
            50% { transform: scaleY(0.6); filter: brightness(1); }
            75% { transform: scaleY(1.0); filter: brightness(1.2); }
          }

          .animate-equalizer {
            animation: equalizer 2s infinite ease-in-out;
            transform-origin: bottom;
          }
        `}
      </style>
    </section>
  );
}
