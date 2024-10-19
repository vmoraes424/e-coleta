"use client";

import Image from "next/image";
import Header from "../public/header.png";
import Sobre from "../public/sobre.png";
import Solucao from "../public/solucao.png";
import Certificacao from "../public/certificacao.png";
import Garrafa from "../public/garrafa.png";
import Latinha from "../public/latinha.png";
import Caixa from "../public/caixa.png";
import Link from "next/link";
import Certificado from "../public/cetificado.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SEBRAE from "../public/patrocinadores/sebrae.png";
import Pelotas from "../public/patrocinadores/pelotas.png";
import Senac from "../public/patrocinadores/senac.png";
import GERDAU from "../public/patrocinadores/gerdau.png";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <section className="flex flex-col md:flex-row items-center gap-8 p-8 justify-center">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h1 className="font-bold text-3xl md:text-5xl">
            Conecte-se a um{" "}
            <span className="text-[#65C854] underline">agora</span> mais
            sustentável.
          </h1>
          <p className="text-lg md:text-xl">
            Junte-se a nós para transformar lixo em futuro em Pelotas.
          </p>
          <div className="flex gap-3">
            <Link
              href={"/apoiar"}
              className="bg-[#65C854] py-3 px-8 rounded-lg text-white font-bold"
            >
              Apoie agora
            </Link>
            <button className="bg-transparent border border-[#D4D4D4] py-3 px-8 rounded-lg">
              Saiba mais
            </button>
          </div>
        </div>
        <Image
          src={Header}
          alt="Logo"
          width={500}
          height={500}
          className="object-contain"
        />
      </section>

      <section className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl">Nosso Progresso</h1>
        <div className="flex gap-24 my-12 flex-col md:flex-row">
          <div className="flex flex-col gap-3 items-center">
            <Image
              src={Garrafa}
              alt="Garrafa"
              width={100}
              height={100}
              className="object-contain"
            />
            <h3 className="font-bold text-lg">+527kg</h3>
            <p className="text-xs">Plástico</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Image
              src={Latinha}
              alt="Latinha"
              width={100}
              height={100}
              className="object-contain"
            />
            <h3 className="font-bold text-lg">+458kg</h3>
            <p className="text-xs">Metal</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Image
              src={Caixa}
              alt="Caixa"
              width={100}
              height={100}
              className="object-contain"
            />
            <h3 className="font-bold text-lg">+312kg</h3>
            <p className="text-xs">Papelão</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-8 p-8 justify-center">
        <Image
          src={Sobre}
          alt="Sobre"
          width={300}
          height={300}
          className="object-contain"
        />
        <div className="flex flex-col gap-4 max-w-[700px]">
          <h1 className="font-bold text-xl md:text-2xl">Sobre</h1>
          <p>
            Nosso SaaS combate o descarte inadequado de resíduos em Pelotas,
            conectando catadores a ferros-velhos certificados e promovendo uma
            reciclagem eficiente e colaborativa.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center gap-8 p-8 justify-center">
        <div className="flex flex-col gap-4 max-w-[700px]">
          <h1 className="font-bold text-xl md:text-2xl">Nossa Solução</h1>
          <p>
            Facilitamos a conexão entre catadores e ferros-velhos, com
            benefícios exclusivos como vouchers e incentivos financeiros.
          </p>
        </div>
        <Image
          src={Solucao}
          alt="Solução"
          width={300}
          height={300}
          className="object-contain"
        />
      </section>

      <section className="flex flex-col md:flex-row items-center gap-8 p-8 justify-center bg-[#ddfbe4] text-center py-12">
        <div className="flex flex-col gap-4 max-w-[700px]">
          <h1 className="font-bold text-xl md:text-3xl mb-6">Certificações</h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <Image
              src={Certificacao}
              alt="Certificacao"
              width={300}
              height={300}
              className="object-contain"
            />
            <div className="flex flex-col text-left">
              <div className="flex gap-3 items-center mb-4">
                <Image
                  src={Certificado}
                  alt="Certificado"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <h3 className="font-bold text-xl">Certificado Green</h3>
              </div>
              <p>
                Nossa rede transforma o descarte inadequado em oportunidades
                sustentáveis, garantindo impacto positivo na comunidade e no
                meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-24">
        <h1 className="font-bold text-3xl text-center mb-12">
          Empresas Parceiras
        </h1>
        <Carousel responsive={responsive} infinite centerMode autoPlay>
          <div className="flex items-center justify-center h-[200px]">
            <Image
              src={SEBRAE}
              alt="Certificacao"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-[200px]">
            <Image
              src={Senac}
              alt="Certificacao"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-[200px]">
            <Image
              src={GERDAU}
              alt="Certificacao"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center h-[200px]">
            <Image
              src={Pelotas}
              alt="Certificacao"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </Carousel>
      </section>
    </div>
  );
}
