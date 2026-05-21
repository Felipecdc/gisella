"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [hearts, setHearts] = useState<any[]>([]);
  const stylebutton = `
    group
    relative
    flex
    items-center
    justify-center
    gap-2
    w-[85%]
    py-2
    px-5
    rounded-2xl
    bg-gradient-to-r
    from-pink-200
    to-pink-300
    border
    border-pink-400
    text-pink-900
    font-semibold
    text-lg
    shadow-xl
    shadow-pink-200/50
    hover:scale-105
    hover:shadow-2xl
    hover:shadow-pink-300/60
    transition-all
    duration-300
    cursor-pointer
    overflow-hidden
  `;

  useEffect(() => {
    const generatedHearts = [...Array(25)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${20 + Math.random() * 30}px`,
      duration: `${4 + Math.random() * 6}s`,
      delay: `${Math.random() * 5}s`,
      emoji: ["💖", "💕", "💘", "💞"][Math.floor(Math.random() * 4)],
    }));

    setHearts(generatedHearts);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-5 bg-[#a3d7f0] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute -bottom-15 text-pink-300"
            style={{
              left: heart.left,
              fontSize: heart.size,
              animation: `floatUp ${heart.duration} linear infinite`,
              animationDelay: heart.delay,
            }}
          >
            {heart.emoji}
          </span>
        ))}
      </div>

      <div className="z-10 flex flex-col items-center text-center p-4 max-w-100 bg-white rounded-4xl">
        <img src="/last.gif" alt="cute home" className="w-64 mb-6 rounded-md" />

        <h1 className="text-3xl font-bold text-pink-700 mb-4">
          Obrigado por namorar comigo, amor! 💖
        </h1>
        <p className="text-sm text-pink-900 mb-10">
          Eu prometo cuidar de você, te apoiar, te fazer sorrir e continuar
          escolhendo você todos os dias 💖 Quero viver muitos momentos ao seu
          lado, rir das coisas bobas com você e fazer nossa vida juntos ser leve
          e feliz ✨🫶
        </p>
      </div>
    </main>
  );
}
