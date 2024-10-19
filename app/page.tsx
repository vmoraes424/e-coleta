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

export default function Home() {
  return (
    <div className="bg-white">
      <section className="flex flex-col md:flex-row items-center gap-8 p-8 justify-center">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h1 className="font-bold text-3xl md:text-5xl">
            Conecte-se a um{" "}
            <span className="text-[#65C854] underline">agora</span> mais
            sustentável.
          </h1>
          <p>
            Transformando o lixo em futuro. Conectamos pessoas e empresas para
            um Pelotas mais sustentável.
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
        <h1 className="font-bold text-2xl">Nosso progresso</h1>
        <div className="flex gap-24 my-12 flex-col md:flex-row">
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
            <p className="text-xs">Metal Reciclado</p>
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
            <p className="text-xs">Papelão Reciclado</p>
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
                Em parceria com empresas certificadas e comprometidas com a
                sustentabilidade, nosso SaaS cria uma rede colaborativa que
                transforma o descarte inadequado de resíduos em oportunidades.
                Ao escolher nossos parceiros, as empresas recebem um selo green
                exclusivo e contribuem para um impacto positivo na comunidade e
                no meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
