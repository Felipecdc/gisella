"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [hearts, setHearts] = useState<any[]>([]);

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
        <img src="/yes.gif" alt="cute home" className="w-64 mb-6 rounded-md" />

        <h1 className="text-2xl font-bold text-pink-700 mb-4">
          Sabia que vc ainda tem amor pela vida, né?! 😌
        </h1>

        <p className="text-sm text-pink-900 mb-10">
          Vc na sabe o quão especial é para mim, e eu quero continuar fazendo vc
          feliz. Te amo muito! 💖 E na ri do meu na
        </p>

        <div className="flex items-center justify-center gap-4 min-w-40 max-h-16.75">
          <Link
            href="./next"
            className="flex items-center justify-center bg-pink-600 hover:bg-pink-700 cursor-pointer text-white w-44 h-16 rounded-2xl text-2xl font-bold shadow-xl transition"
          >
            Próximo 💖
          </Link>
        </div>
      </div>
    </main>
  );
}
