"use client";

import { coletores, IColetor } from "@/api";
import { TextField } from "@mui/material";
import { Recycle } from "lucide-react";
import React, { useState } from "react";

import Garrafa from "../../public/garrafa.png";
import Latinha from "../../public/latinha.png";
import Caixa from "../../public/caixa.png";

import ImagemLogo from "./image.png";
import Image from "next/image";

export default function Apoiar() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredColetores = coletores.filter((coletor: IColetor) => {
    return (
      coletor.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coletor.idade.toString().includes(searchTerm)
    );
  });

  return (
    <div className="flex flex-col items-center">
      <TextField
        id="outlined-basic"
        label="Buscar"
        style={{
          marginTop: 30,
        }}
        variant="outlined"
        className="w-[90%] md:w-1/2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredColetores.map((coletor: IColetor, index) => {
        const totalReciclado =
          coletor.plastico + coletor.papelao + coletor.metal;
        return (
          <div
            key={coletor.nome}
            className="flex flex-col gap-3 max-w-[500px] w-full px-4 sm:px-0 lg:px-0"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mt-12">
              <Image src={ImagemLogo} alt="Logo" width={130} height={130} />
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 text-xl">
                  {index + 1}.<h1>{coletor.nome}</h1> -{" "}
                  <p>{coletor.idade} anos</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#65C854] py-1 rounded-lg px-6 mb-2 flex items-center justify-center gap-3">
                      <Image src={Latinha} alt="Logo" width={20} height={20} />
                      <h2 className=" font-bold">{coletor.metal}kg</h2>
                    </div>
                    <p>Metal</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-[#65C854] py-1 rounded-lg px-6 mb-2 flex items-center justify-center gap-3">
                      <Image src={Caixa} alt="Logo" width={20} height={20} />
                      <h2 className=" font-bold">{coletor.papelao}kg</h2>
                    </div>
                    <p>Papelão</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-[#65C854] py-1 rounded-lg px-6 mb-2 flex items-center justify-center gap-3">
                      <Image src={Garrafa} alt="Logo" width={20} height={20} />
                      <h2 className=" font-bold">{coletor.plastico}kg</h2>
                    </div>
                    <p>Plástico</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Recycle color="#65C854" />
                  <p className="font-bold">
                    Total: {totalReciclado}kg reciclados
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => window.open(coletor.link, "_blank")}
              className="bg-[#65C854] py-4 px-24 rounded-md font-bold text-white hover:opacity-80"
            >
              Apoiar agora
            </button>
            {index < filteredColetores.length - 1 && (
              <div className="w-full h-[1px] opacity-20 mt-8 bg-black"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
