"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center py-4 px-6 md:px-24 border-b border-opacity-25">
      <div className="flex gap-4 items-center">
        <Image width={50} height={50} src={Logo} alt="Logo" />
        <h1 className="text-xl font-bold">E-Coleta</h1>
      </div>
      <div className="hidden md:flex gap-6 items-center">
        <Link href="/">Página principal</Link>
        <Link
          href="/apoiar"
          className="bg-[#65C854] py-3 px-8 text-white rounded-lg hover:opacity-80"
        >
          Apoiar Coletor
        </Link>
      </div>
      <button className="md:hidden p-2 focus:outline-none" onClick={toggleMenu}>
        {isOpen ? (
          <span className="text-2xl">&times;</span>
        ) : (
          <span className="text-2xl">&#9776;</span>
        )}
      </button>
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-md w-40 md:hidden">
          <Link
            href="/"
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Página principal
          </Link>
          <Link
            href="/apoiar"
            className="block px-4 py-2 text-[#65C854] hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Apoiar Coletor
          </Link>
        </div>
      )}
    </div>
  );
}
