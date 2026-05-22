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
        <h1 className="text-3xl font-bold text-pink-700 mb-4">
          Qual a razão de eu amar vc? 😌
        </h1>

        <div className="flex flex-col w-full items-center justify-center gap-3">
          <button
            onClick={() => alert("Erroooou amor")}
            className={stylebutton}
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-lg">😎</span>
            <span className="relative z-10">Vc tem muita aura</span>
          </button>

          <button
            onClick={() => alert("Erroooou amor")}
            className={stylebutton}
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-lg">📱</span>
            <span className="relative z-10">Vc é pro no Roblox </span>
          </button>

          <button
            onClick={() => alert("Erroooou amor")}
            className={stylebutton}
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-lg">💞</span>
            <span className="relative z-10">Vc me faz querer evoluir</span>
          </button>

          <button
            onClick={() => alert("Erroooou amor")}
            className={stylebutton}
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-lg">🫶</span>
            <span className="relative z-10">Vc deixa tudo mais leve</span>
          </button>

          <Link href={"./agree"} className={stylebutton}>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-lg">✨</span>
            <span className="relative z-10">Tudo e mais um pouco </span>
          </Link>

          <button
            onClick={() => alert("Erroooou amor")}
            className={stylebutton}
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-lg">🎀</span>
            <span className="relative z-10">Mais um pra cima</span>
          </button>

          <button
            onClick={() => alert("Erroooou amor")}
            className={stylebutton}
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-lg">🌎</span>
            <span className="relative z-10">O de cima amoor</span>
          </button>
        </div>
      </div>
    </main>
  );
}
