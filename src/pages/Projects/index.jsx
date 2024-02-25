import "./styles.css";
import { useEffect } from "react";
import Header from "../../components/Header";
import Cardproject from "../../components/Cardproject";

function Projects() {
  useEffect(() => {
    document.title = "Projetos | Deivid Micael";
  }, []);

  return (
    <div className="flex styled-container">
      <Header />
      <div className="global flex flex-col w-full p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52 overflow-hidden undefined text-white">
        <div className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-1">
          <h2>
            The <span className="text-zinc-500">life</span>
          </h2>
          <h2>
            is a collection of
            <br />
            <span className="text-zinc-500">experiences</span>.
          </h2>
        </div>

        <div className="hidden lg:flex w-full p-4 bg-neutral-400/10 border-[1px] border-neutral-400 rounded-lg text-neutral-300 my-4">
          <p>
            💡 Passe o mouse por cima do projeto em específico para receber mais
            opções de interação.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-zinc-500 my-16">
          <h1 className="font-semibold text-2xl sm:text-3xl undefined">
            Projetos
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            <Cardproject
              src="/assets/project-1.webp"
              title="Andreza Biquinis - Voluntário"
              desc="Loja virtual online para a venda de biquinis."
              github="https://github.com/CodeDeivid"
              details=""
            />
            <Cardproject
              src="/assets/project-1.webp"
              title="Andreza Biquinis - Voluntário"
              desc="Loja virtual online para a venda de biquinis."
              github="https://github.com/CodeDeivid"
              details=""
            />
            <Cardproject
              src="/assets/project-1.webp"
              title="Andreza Biquinis - Voluntário"
              desc="Loja virtual online para a venda de biquinis."
              github="https://github.com/CodeDeivid"
              details=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
