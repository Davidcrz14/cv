import { motion } from 'framer-motion';
import { FaEnvelope, FaExternalLinkAlt, FaFacebookF, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import './App.css';

// Asumimos que tienes un componente Navbar
import Navbar from './components/Navbar';
interface Project {
  id: number;
  title: string;
  description: string;
  github: string;
  link: string;
  number: string;
}

interface Hobby {
  title: string;
  description: string;
  icon: string;
}
function App() {

  const projects: Project[] = [
    { id: 1, title: 'Discord Bot', description: 'BotD es un bot de Discord diseñado para mejorar la experiencia del usuario en servidores de Discord mediante una serie de funcionalidades útiles y divertidas. Está construido utilizando la biblioteca discord.js, que es una poderosa herramienta para interactuar con la API de Discord.', github: 'https://github.com/Davidcrz14', link: 'https://github.com/Davidcrz14/botdiscord', number: '01' },
    { id: 2, title: 'DesuDenC', description: 'Este proyecto es una red social de estilo foro que permite a los usuarios interactuar y compartir contenido. Está diseñado para ofrecer una experiencia de usuario intuitiva y personalizada, con diversas características para gestionar perfiles y publicaciones.', github: 'https://github.com/Davidcrz14', link: 'https://github.com/Davidcrz14/Red-Social', number: '02' },
    { id: 3, title: 'FondV ', description: 'Programa para Windows, realizado con C# y Windows Form + .NET, que permite al usuario cambiar el fondo de su pantalla de una manera mas dinámica', github: 'https://github.com/Davidcrz14', link: 'https://github.com/Davidcrz14/FondoDv', number: '03' },
  ]

  const hobbies: Hobby[] = [
    {
      title: "Dibujo",
      description: "En mis ratos libres me gusta dibujar paisajes y personajes de mis animes favoritos. También he tomado clases de pintura al óleo.",
      icon: "🎨"
    },
    {
      title: "Videojuegos",
      description: "Disfruto de jugar videojuegos como Call Of Duty, Minecraft, Valorant y Bloodstrike para divertirme y relajarme.",
      icon: "🎮"
    },
    {
      title: "Música",
      description: "Soy apasionado por la música, especialmente la música clásica y la música europea. Algunos de mis artistas favoritos son Laufey, Mon Laferte y El Cuarteto de Nos.",
      icon: "🎵"
    }
  ]


  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-16">
          <motion.h1
            className="text-5xl font-bold mb-8 text-center text-blue-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bienvenido a mi Portafolio
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            <InfoCard
              title="Sobre mí"
              content={`Mi nombre es David Cruz, tengo 18 años y vivo en Oaxaca de Juárez. Me gusta dibujar, leer, hacer deporte, y trabajar en equipo.`}
            />
            <InfoCard
              title="Lenguajes y Tecnologías"
              content={
                <ul className="list-disc pl-6 space-y-1">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C, C#</li>
                  <li>Kotlin</li>
                  <li>React y Node.js</li>
                  <li>Desarrollo Web (HTML, CSS, JS)</li>
                  <li>MySQL, PostgreSQL</li>
                </ul>
              }
            />
            <InfoCard
              title="Curricular"
              content={`Soy estudiante de Ingeniería en Computación con pasión por el desarrollo de software, la inteligencia artificial, y la ciberseguridad. Tengo habilidades en varios lenguajes de programación y tecnologías emergentes. Estoy comprometido con la resolución de problemas complejos y la entrega de soluciones innovadoras.`}
            />
          </motion.div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-300">Algunos de mis Proyectos</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project) => (
              <Card key={project.id} {...project} />
            ))}
          </div>
        </section>

        {/* Línea de división */}
        <div className="my-16 border-t border-blue-500 opacity-50"></div>

        {/* Aquí puedes añadir más contenido abajo de la línea de división */}
<section>
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-300">Pasatiempos</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {hobbies.map((hobby, index) => (
              <HobbyCard key={index} {...hobby} />
            ))}
          </div>
        </section>
                <div className="my-16 border-t border-blue-500 opacity-50"></div>
          <section>
  <h2 className="text-4xl font-bold mb-6 text-center text-blue-300">Mis Canciones Favoritas</h2>
  <div className="flex flex-wrap justify-center gap-6">
    <div className="bg-blue-800 p-4 rounded-lg shadow-lg border border-blue-500 backdrop-blur-sm">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/35LdDKNMwvKftENaj1WIwF?utm_source=generator"
        width="350"
        height="252"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
    <div className="bg-blue-800 p-4 rounded-lg shadow-lg border border-blue-500 backdrop-blur-sm">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/08PdFBcXzpkn1cWNgmKqhn?utm_source=generator"
        width="350"
        height="252"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
    <div className="bg-blue-800 p-4 rounded-lg shadow-lg border border-blue-500 backdrop-blur-sm">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/0pR6N68RkIGKxitlTqraZ3?utm_source=generator"
        width="350"
        height="252"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>
 <div className="my-16 border-t border-blue-500 opacity-50"></div>

        {/* Sección de contacto */}
        <section>
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-300">Contáctame</h2>
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/Hacker.crz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
              <FaFacebookF className="text-3xl" />
            </a>
            <a href="https://www.instagram.com/davcrzc/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="mailto:cucd060823@gs.utm.mx" className="text-red-500 hover:text-red-400 transition-colors">
              <FaEnvelope className="text-3xl" />
            </a>
            <a href="https://wa.me/+5219517457750" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors">
              <FaWhatsapp className="text-3xl" />
            </a>
          </div>
        </section>

      </main>
    </div>
  )
}
interface InfoCardProps {
  title: string;
  content: React.ReactNode;
}
function InfoCard({ title, content }: InfoCardProps) {
  return (
    <motion.div
      className="bg-blue-800 bg-opacity-30 p-6 rounded-lg shadow-lg h-full border border-blue-500 backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-300">{title}</h3>
      <div className="text-gray-300">{content}</div>
    </motion.div>
  )
}

function Card({ title, description, github, link, number }: Project) {
  return (
    <motion.div
      className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-blue-900 bg-opacity-50 flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-blue-800 border border-blue-700 backdrop-blur-sm rounded-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={2}
        stroke="#4FD1C5"
        fill="none"
        viewBox="0 0 24 24"
        className="text-5xl h-12 w-12 group-hover:stroke-blue-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect ry="2" rx="2" height="14" width="20" y="3" x="2" />
        <line y2="21" x2="16" y1="21" x1="8" />
        <line y2="21" x2="12" y1="17" x1="12" />
      </svg>

      <p className="font-bold text-2xl text-blue-300 group-hover:text-white">
        {title}
      </p>
      <p className="text-gray-300 text-sm">
        {description}
      </p>
      <div className="flex justify-between w-full mt-4">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors group-hover:text-white">
          <FaGithub className="inline mr-2" />
          GitHub
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors group-hover:text-white">
          <FaExternalLinkAlt className="inline mr-2" />
          Ver proyecto
        </a>
      </div>

      <p
        style={{
          WebkitTextStroke: "1px #4FD1C5",
          WebkitTextFillColor: "transparent",
        }}
        className="text-5xl font-bold self-end opacity-50 group-hover:opacity-70"
      >
        {number}
      </p>

    </motion.div>
  )
}
function HobbyCard({ title, description, icon }) {
  return (
    <motion.div
      className="relative w-[300px] h-[200px] bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg overflow-hidden transition-all duration-300 group hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-6xl transition-all duration-300 group-hover:scale-0 group-hover:rotate-45">
        {icon}
      </div>
      <div className="absolute inset-0 bg-blue-800 p-6 flex flex-col justify-center items-center opacity-0 transition-all duration-300 group-hover:opacity-100">
        <h3 className="text-2xl font-bold text-blue-300 mb-2">{title}</h3>
        <p className="text-sm text-gray-300 text-center">{description}</p>
      </div>
    </motion.div>
  )
}
export default App
