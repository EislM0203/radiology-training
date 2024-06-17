"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function Hero() {
  const words = ["Radiologist", "Mentor", "Teacher"];
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    setCurrentWord(words[i]);
    const timer = setTimeout(() => {
      if (isDeleting) {
        setJ(j - 1);
        if (j === 0) {
          setIsDeleting(false);
          setI(i === words.length - 1 ? 0 : i + 1);
        }
      } else {
        setJ(j + 1);
        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [i, j, isDeleting, currentWord]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setIsCursorVisible(!isCursorVisible);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, [isCursorVisible]);

  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-25 lg:text-left relative">
  <div className="absolute inset-0 bg-cover bg-center opacity-50 lg:hidden" style={{ backgroundImage: "url('/hero.png')" }}></div>
  <div className="relative px-4 sm:px-8 xl:pr-16 lg:w-1/2 z-10">
    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
      <span className="block xl:inline">Radiology Training Portal</span>{" "}
      <span className="block text-indigo-600 xl:inline">
        Dr. Pasquale Capriglione
      </span>
    </h1>
    <p className="mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
      <span id="typewriter">
        I am a {currentWord.substring(0, j)}
        {isCursorVisible && "|"}{" "}
      </span>
    </p>
  </div>
</div>



        <div className="relative w-full h-64 sm:h-72 md:h-96 hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero.png"
            alt=""
          />
        </div>
      </main>
      <div className="w-full  px-6 py-8 rounded-lg shadow-lg bg-white p-6 mt-12">
      <div className="flex items-center justify-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl">
        <h2 >Click on the organ you want to analyze</h2>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl items-center justify-center mt-6">
          <Link legacyBehavior href="/liver">
            <a className="button text-2xl text-center hover:bg-gray-100 rounded-md p-6">Liver</a>
          </Link>
          <Link legacyBehavior href="/skull">
            <a className="button text-2xl text-center hover:bg-gray-100 rounded-md p-6">Coming soon!</a>
          </Link>
          <Link legacyBehavior href="/lung">
            <a className="button text-2xl text-center hover:bg-gray-100 rounded-md p-6">Coming soon!</a>
          </Link>
          <Link legacyBehavior href="/other-organ">
            <a className="button text-2xl text-center hover:bg-gray-100 rounded-md p-6">Coming soon!</a>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
