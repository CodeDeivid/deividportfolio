import Header from "../../components/Header";
import Cardxp from "../../components/Cardxp.jsx";
import { useEffect } from "react";
import "./styles.css";

function About() {
  useEffect(() => {
    document.title = "Sobre | Deivid Micael";
  }, []);

  const skillsCards = [
      { title: "React", src: "react"},
      { title: "Tailwind", src: "tailwind"},
      { title: "Javascript", src: "javascript"},
      { title: "Git", src: "git"},
      { title: "HTML", src: "html"},
      { title: "CSS ", src: "css"},
    ];

  const listCards = skillsCards.map((c, i) => (
    <div key={i} className="skillCard rounded-sm flex items-center p-5 text-lg gap-3 bg-zinc-900 glow:bg-zinc-800/70 glow:border-neutral-100 border-[1px] border-transparent hover:scale-[1.005]">
      <img src={`./src/assets/${c.src}.png`} className="w-10" />
      <h3 className="text-xl">{c.title}</h3>
    </div>
  ))

  return (
    <div className="flex styled-container">
      <Header />
      <div className="global flex flex-col w-full p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52 overflow-hidden undefined text-white">
        <div className="flex gap-9 justify-between items-center xl:justify-start">
          <div className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-1">
            <h2>
              Turn <span className="text-neutral-500">coffee</span>
            </h2>
            <h2>
              into <span className="text-neutral-500">code</span>.
            </h2>
          </div>
          <img
            src="./src/assets/me.png"
            className="w-1/5 xl:w-1/6 2xl:w-1/12 sm:flex"
          />
        </div>

        <p className="text-xl mt-2">
          Eu me chamo Deivid, tenho 19 anos e sou um desenvolvedor Front-End!
          <span className="text-neutral-500"> Moro em Ipatinga - MG</span> e
          atualmente estou cursando Análise e Desenvolvimento de Sistemas pela
          UNINTER,{" "}
          <span className="text-neutral-500">
            além de estar estudando em cursos por fora. Foi apenas em 2022 que</span>{" "}
          descobri através de vídeos e do meu <span className="text-neutral-500">
            primo Italo que isso poderia se
            tornar a minha profissão, desde então venho estudando e
          </span> praticando com
          o objetivo de aperfeiçoar minhas skills como desenvolvedor.
        </p>

        <h2 className="text-3xl mt-16">Ferramentas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 flex-col w-full gap-1 sm:text-white glow:border-neutral-100 border-[1px] border-transparent">
          {listCards}
        </div>

        <h2 className="text-3xl mt-16 mb-6">Experiência</h2>
        <div className="flex flex-col gap-6">
          <Cardxp date="Set 2023 - Nov 2023" name="Andreza Biquinis" type="Desenvolvedor de Software Voluntário" desc="Responsável por desenvolver um site de gerenciamento de produtos para ser usado como vitrine aos clientes. O site conta com sistema de autenticação, personalização de elementos como contato, email e também a possibilidade de criar, editar e remover produtos e categorias."/>
          <Cardxp date="Set 2023 - Nov 2023" name="Andreza Biquinis" type="Desenvolvedor de Software Voluntário" desc="Responsável por desenvolver um site de gerenciamento de produtos para ser usado como vitrine aos clientes. O site conta com sistema de autenticação, personalização de elementos como contato, email e também a possibilidade de criar, editar e remover produtos e categorias."/>
          <Cardxp date="Set 2023 - Nov 2023" name="Andreza Biquinis" type="Desenvolvedor de Software Voluntário" desc="Responsável por desenvolver um site de gerenciamento de produtos para ser usado como vitrine aos clientes. O site conta com sistema de autenticação, personalização de elementos como contato, email e também a possibilidade de criar, editar e remover produtos e categorias."/>
        </div>
      </div>
    </div>
  );
}

export default About;
