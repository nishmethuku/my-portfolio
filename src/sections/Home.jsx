import React, { useState, useEffect } from 'react';

const useTypingEffect = (text, loop = false, typingSpeed = 150, deletingSpeed = 75, pauseDuration = 1000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = Array.isArray(text) ? text[textIndex] : text;

      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          if (Array.isArray(text) && loop) {
            setTextIndex((prev) => (prev + 1) % text.length);
          }
        }
      } else {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else {
          if (loop) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, text, loop, textIndex, typingSpeed, deletingSpeed, pauseDuration]);

  return displayedText;
};

export default function Home() {
  const roles = ["a Computer Science on Pre-Med Student", "a Product/Software Engineer", "an AI Enthusiast"];
  const typedRoles = useTypingEffect(roles, true);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative fade-in">
      <span className="text-pink-400 font-medium mb-2 text-lg glow-text">Hello World, I'm</span>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-2 tracking-tight text-white font-mono">
        Nish Methuku
      </h1>

      <h2 className="text-4xl md:text-3xl font-semibold text-gray-300 italic mb-4">
        And I am {typedRoles}
        <span className="cursor-blink">|</span>
      </h2>

      <p className="text-gray-400 max-w-xl mb-6">
        I'm passionate about building real, useful things — from software to systems to solutions that actually help people. Whether it's AI, healthcare technology, or product design, I love combining creativity with impact.
      </p>

      {/* Avatar */}
      <div className="mt-8 mb-8">
        <span className="glow-avatar inline-block">
          <img
            src="/avatar.jpg"
            alt=""
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full"
          />
        </span>
      </div>

      {/* Scroll Indicator */}
      <div className="animate-bounce mt-4">
        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
