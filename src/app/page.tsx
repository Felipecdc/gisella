"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [startedMoving, setStartedMoving] = useState(false);
  const [hearts, setHearts] = useState<any[]>([]);
  const [noPosition, setNoPosition] = useState({
    top: "60%",
    left: "55%",
  });

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

  function moveButton() {
    setStartedMoving(true);

    const top = Math.random() * 80;
    const left = Math.random() * 80;

    setNoPosition({
      top: `${top}%`,
      left: `${left}%`,
    });
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#a3d7f0] p-4">
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

      <div className="z-10 flex w-full max-w-[420px] flex-col items-center rounded-[32px] bg-white p-6 text-center shadow-2xl">
        <img
          src="/home.gif"
          alt="cute home"
          className="mb-6 w-44 sm:w-56 md:w-64"
        />

        <h1 className="mb-10 text-2xl font-bold text-pink-700 sm:text-3xl">
          Feliz dia dos namorados, meu amor! 💖
        </h1>

        <h1 className="mb-4 text-lg font-bold text-pink-700 sm:text-xl">
          Quer continuar namorando comigo?
        </h1>

        <p className="mb-8 text-sm text-pink-900 sm:text-base">
          prometo continuar sendo fofo às vezes 😌
        </p>

        <div className="relative flex min-h-[140px] w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/yes"
            className="flex h-14 w-full max-w-[180px] items-center justify-center rounded-2xl bg-pink-600 text-lg font-bold text-white shadow-xl transition hover:bg-pink-700 sm:h-16 sm:text-2xl"
          >
            SIM 💖
          </Link>
          {startedMoving && (
            <div className="h-14 w-full max-w-[180px] sm:h-16" />
          )}
          <button
            onMouseEnter={moveButton}
            onTouchStart={moveButton}
            onClick={moveButton}
            style={
              startedMoving
                ? {
                    position: "fixed",
                    top: noPosition.top,
                    left: noPosition.left,
                  }
                : {}
            }
            className="h-14 w-full max-w-[180px] rounded-2xl border-2 border-pink-400 bg-white text-lg font-bold text-pink-600 shadow-xl transition sm:h-16 sm:text-2xl"
          >
            NÃO 😭
          </button>
        </div>
      </div>
    </main>
  );
}
