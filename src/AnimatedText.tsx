import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import './AnimatedText.css';

interface AnimatedTextProps {
  initialText: string;
  className?: string;
  changeInterval?: number; // Intervalo en segundos para cambiar el texto
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  initialText,
  className,
  changeInterval = 15,
}) => {
  const [displayText, setDisplayText] = useState(Array(initialText.length).fill(''));
  const [currentText, setCurrentText] = useState(initialText);

  const alternativeTexts = [
    'Waos',
    'Hello World',
    'FullStack Developer',
    initialText,
  ];

  useEffect(() => {
    const animateText = async () => {
      // Limpiar completamente el texto antes de animar el nuevo
      await new Promise(resolve => setTimeout(resolve, 100));
      setDisplayText(Array(currentText.length).fill(''));

      for (let i = 0; i < currentText.length; i++) {
        const startTime = Date.now();
        while (Date.now() - startTime < 400) {
          setDisplayText(prev => {
            const newText = [...prev];
            newText[i] = getRandomChar();
            return newText;
          });
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        setDisplayText(prev => {
          const newText = [...prev];
          newText[i] = currentText[i];
          return newText;
        });
      }
    };

    animateText();

    const intervalId = setInterval(() => {
      const currentIndex = alternativeTexts.indexOf(currentText);
      const nextIndex = (currentIndex + 1) % alternativeTexts.length;
      setCurrentText(alternativeTexts[nextIndex]);
    }, changeInterval * 1000);

    return () => clearInterval(intervalId);
  }, [currentText, changeInterval]);

  const getRandomChar = () => {
    const chars = [
      ...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      ...'!@#$%^&*()_+-=[]{}|;:,.<>?',
      ...'你好世界星月日月山水',
      ...'こんにちは世界',
      ...'안녕하세요세계',
      ...'привет мир',
      ...'🎵💼🎮🦉💻📣🌐🌷🚨📖©️📕💝🖥️🎫🔆☢️🔞'
    ];
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return (
    <div className="text-container">
      <motion.h1
        className={`animated-text ${className}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {displayText.join('')}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
