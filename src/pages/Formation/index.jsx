import "./styles.css";
import { useEffect } from "react";
import Header from "../../components/Header";
import Cardformation from "../../components/Cardformation";

function Formation() {
  useEffect(() => {
    document.title = "Formação | Deivid Micael";
  }, []);

  return (
    <div className="flex styled-container">
      <Header />
      <div className="global flex flex-col w-full p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52 overflow-hidden undefined text-white">
        <div className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-1">
          <h2>Invest</h2>
          <h2>
            in the <span className="text-zinc-500">future</span>,
            <br />
            <span className="text-zinc-500">study</span>.
          </h2>
        </div>

        <ul className="flex flex-col w-full h-full rounded-xl overflow mt-4 mb-8 gap-[1px]">
          <Cardformation 
          src="./src/assets/uninter.png"
          title="Análise e Desenvolvimento de Sistemas"
          status="Fev. 2024 - em andamento"
          />
          <Cardformation 
          src="./src/assets/odin.png"
          title="TheOdinProject - (React - Node)"
          status="jan. 2024 - em andamento"
          />
          <Cardformation 
          src="./src/assets/coder.png"
          title="Cod3r Cursos - Web Moderno "
          status="ago 2023 - fev 2024"
          />
          <Cardformation 
          src="./src/assets/explorer.png"
          title="Rocketseat - Explorer"
          status="abr 2023 - ago 2023."
          />
          <Cardformation 
          src="./src/assets/origamid.png"
          title="Origamid"
          status="jan 2023 - abr 2023."
          />
          <Cardformation 
          src="./src/assets/freecodecamp.png"
          title="FreeCodeCamp - Responsive Web Design"
          status="nov 2022 - jan 2023."
          />
        </ul>
      </div>
    </div>
  );
}

export default Formation;
