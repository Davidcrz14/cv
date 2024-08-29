import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaGithub } from 'react-icons/fa'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('/')

  const links = [
    { href: 'https://github.com/Davidcrz14', icon: FaGithub, label: 'GitHub' },
    { href: '/contacto', icon: FaEnvelope, label: 'Contacto' }


  ]

  return (
    <nav className="bg-blue-900 bg-opacity-50 backdrop-blur-md text-gray-100 py-4 px-6 shadow-lg">
      <ul className="flex justify-center space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <motion.a
              href={link.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                activeLink === link.href
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'hover:bg-blue-800 hover:text-blue-200'
              }`}
              onClick={() => setActiveLink(link.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="text-xl" />
              <span className="hidden md:inline">{link.label}</span>
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
