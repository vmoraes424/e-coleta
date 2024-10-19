import Image from "next/image";
import Header from "../public/header.png";
import Sobre from "../public/sobre.png";
import Solucao from "../public/solucao.png";
import Certificacao from "../public/certificacao.png";

import Garrafa from "../public/garrafa.png";
import Latinha from "../public/latinha.png";
import Caixa from "../public/caixa.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center gap-8 p-8 justify-center">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h1 className="font-bold text-3xl md:text-4xl">
            Conecte-se a um futuro mais sustentável.
          </h1>
          <p>
            Transformando o lixo em futuro. Conectamos pessoas e empresas para
            um Pelotas mais sustentável.
          </p>
          <div className="flex gap-3">
            <button className="bg-transparent border border-[#D4D4D4] py-3 px-8 rounded-lg">
              Saiba mais
            </button>
            <Link
              href={"/apoiar"}
              className="bg-[#65C854] py-3 px-8 rounded-lg text-white font-bold"
            >
              Apoie agora
            </Link>
          </div>
        </div>
        <Image
          src={Header}
          alt="Logo"
          width={400}
          height={400}
          className="object-contain"
        />
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
            No coração da transformação sustentável de Pelotas, nosso SaaS foi
            criado para resolver um dos maiores desafios ambientais da cidade: o
            descarte inadequado de resíduos recicláveis. Nossa missão é conectar
            catadores de materiais recicláveis a ferros-velhos certificados e à
            população, criando uma rede eficiente e colaborativa que incentiva a
            reciclagem responsável e promove benefícios sociais diretos.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center gap-8 p-8 justify-center">
        <div className="flex flex-col gap-4 max-w-[700px]">
          <h1 className="font-bold text-xl md:text-2xl">Nossa Solução</h1>
          <p>
            Desenvolvemos uma plataforma inteligente que facilita a interação
            entre catadores autônomos e ferros-velhos parceiros, garantindo uma
            reciclagem eficiente e certificada. Além disso, nosso sistema
            oferece uma série de benefícios exclusivos para os catadores, como
            vouchers, premiações e incentivos financeiros baseados em
            produtividade, criando um ecossistema onde todos ganham – o meio
            ambiente, os trabalhadores e as empresas.
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

      <section className="flex flex-col md:flex-row items-center gap-8 p-8 justify-center">
        <Image
          src={Certificacao}
          alt="Certificações"
          width={300}
          height={300}
          className="object-contain"
        />
        <div className="flex flex-col gap-4 max-w-[700px]">
          <h1 className="font-bold text-xl md:text-2xl">Certificações</h1>
          <p>
            No coração da transformação sustentável de Pelotas, nosso SaaS foi
            criado para resolver um dos maiores desafios ambientais da cidade: o
            descarte inadequado de resíduos recicláveis. Nossa missão é conectar
            catadores de materiais recicláveis a ferros-velhos certificados e à
            população, criando uma rede eficiente e colaborativa que incentiva a
            reciclagem responsável e promove benefícios sociais diretos.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl">Nosso progresso</h1>
        <div className="flex gap-24 my-12">
          <div className="flex flex-col gap-3 justify-center items-center">
            <Image
              src={Garrafa}
              alt="Garrafa"
              width={100}
              height={100}
              className="object-contain"
            />
            <h3 className="font-bold text-lg">+527kg</h3>
            <p className="text-xs">Plástico Reciclado</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <Image
              src={Latinha}
              alt="Latinha"
              width={100}
              height={100}
              className="object-contain"
            />
            <h3 className="font-bold text-lg">+458kg</h3>
            <p className="text-xs">Plástico Reciclado</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <Image
              src={Caixa}
              alt="Caixa"
              width={100}
              height={100}
              className="object-contain"
            />
            <h3 className="font-bold text-lg">+312kg</h3>
            <p className="text-xs">Plástico Reciclado</p>
          </div>
        </div>
      </section>
    </div>
  );
}
