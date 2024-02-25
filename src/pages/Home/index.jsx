import "./styles.css";
import { useEffect } from "react";
import Header from "../../components/Header";
import Cardproject from "../../components/Cardproject";

function Home() {
  useEffect(() => {
    document.title = "Início | Deivid Micael";
  }, []);

  return (
    <div className="flex styled-container">
      <Header />
      <div className="global flex flex-col w-full p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52 overflow-hidden undefined text-white">
        <div className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-1">
          <h2>
            Use <span className="text-zinc-500">technology</span>
          </h2>
          <h2>
            to make the <span className="text-zinc-500">difference</span>.
          </h2>
        </div>
        <p className="text-base sm:text-xl text-zinc-300 mt-3">
          Olá, Deivid Micael ao seu dispor.{" "}
          <span className="text-zinc-500">
            Eu sou um desenvolvedor front-end.
          </span>
        </p>

        <div className="flex gap-2 mt-4 mb-16">
          <a
            href="./public/cv.pdf"
            target="_blank"
            className="cv-button flex items-center rounded-xl bg-white text-zinc-950 border-[1px] border-zinc-700 p-3 w-full max-w-[160px] hover:bg-transparent hover:text-white transition-all justify-between font-semibold duration-700 gap-1 group/edit"
          >
            <img
              src="./src/assets/cv.png"
              className="w-4 transition-all duration-700 group/edit"
            />
            Curriculo
            <img
              src="./src/assets/arrow.png"
              className="brightness-0 w-3 transition-all duration-700 group/edit"
            />
            <img
              src="./src/assets/download.png"
              className="w-4 transition-all invert hidden duration-700 group/edit"
            />
          </a>
          <a
            href="mailto:deividmickael@gmail.com"
            className="cv-button flex items-center rounded-xl bg-zinc-500 border-[1px] border-zinc-700 p-3 w-full max-w-[160px] hover:brightness-150 transition-all justify-between duration-300 group/edit"
            id="email-button"
          >
            <img
              src="./src/assets/email.png"
              id="email-icon"
              className="w-4 transition-all invert-0 duration-700 group/edit"
            />
            Email
            <img
              src="./src/assets/arrow.png"
              className="brightness-100 w-3 transition-all duration-700 group/edit"
            />
            <img
              src="./src/assets/a.png"
              className="w-4 transition-all invert hidden duration-700 group/edit"
            />
          </a>
        </div>

        <div className="flex mb-4 flex-row justify-between items-center">
          <h1 className="font-semibold text-2xl sm:text-3xl undefined">
            Últimos projetos
          </h1>
          <a
            href="/projects"
            className="see-all flex items-center rounded-lg bg-darkBg border-[1px] border-darkBorder px-2 py-1 sm:px-5 sm:py-1 w-fit gap-1 sm:gap-2 hover:brightness-150 transition-all justify-between duration-300 group/edit"
          >
            Ver todos
            <img
              src="./src/assets/arrow.png"
              className="brightness-100 w-3 transition-all duration-700 group/edit"
            />
            <img
              src="./src/assets/arrow-2.png"
              className="w-4 transition-all invert hidden duration-700 group/edit"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          <Cardproject
            src="./src/assets/project-1.webp"
            title="Andreza Biquinis - Voluntário"
            desc="Loja virtual online para a venda de biquinis."
            github="https://github.com/CodeDeivid"
            details=""
          />
          <Cardproject
            src="./src/assets/project-1.webp"
            title="Andreza Biquinis - Voluntário"
            desc="Loja virtual online para a venda de biquinis."
            github="https://github.com/CodeDeivid"
            details=""
          />
          <Cardproject
            src="./src/assets/project-1.webp"
            title="Andreza Biquinis - Voluntário"
            desc="Loja virtual online para a venda de biquinis."
            github="https://github.com/CodeDeivid"
            details=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
