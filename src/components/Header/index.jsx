import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  const [open, setOpen] = useState(false);

  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { title: "Início", src: "home", id: 1, route: "" },
      { title: "Sobre", src: "about", id: 2, route: "About" },
      { title: "Projetos", src: "projects", id: 3, route: "Projects" },
      { title: "Formação ", src: "formation", id: 4, route: "Formation" },
      { title: "Github", src: "github", gap: true, link: true },
      { title: "Linkedin", src: "linkedin", link: true },
      { title: "Whatsapp ", src: "Whatsapp", link: true },
      { title: "Discord ", src: "discord", link: true },
    ],
  });

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  function toggleActiveStyles(index) {
    const currentObject = appState.objects[index];
    if (
      currentObject === appState.activeObject &&
      currentObject.id !== undefined
    ) {
      return "active";
    } else {
      return "inactive";
    }
  }

  const links = document.querySelectorAll(
    "ul.links-container a:not(:nth-of-type(-n+4))"
  );
  
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const linkText = link.textContent.trim();
      
      switch (linkText) {
        case "Github":
          window.open("https://github.com/CodeDeivid", "_blank");
          break;
        case "Linkedin":
          window.open("https://www.linkedin.com/in/deivid-micael-santos-silva", "_blank");
          break;
        case "Whatsapp":
          window.open("https://wa.me/5531982452175", "_blank");
          break;
        case "Discord":
          window.open("https://discord.com/users/472803519519391754", "_blank");
          break;
        default:
          console.log("Link não reconhecido");
      }
    });
  });


  return (
    <>
      <div
        className={`${
          open ? "w-96" : "w-20"
        } duration-300 h-full p-5 pt-8 bg-zinc-950 relative shadow-xl border-r-[1px] border-zinc-900`}
      >
        <div
          className={`hidden lg:flex absolute bg-zinc-900 border-[1px] border-zinc-800 rounded-full ${
            !open ? "rotate-0" : "rotate-180"
          } -right-3 top-16 p-2 items-center justify-center hover:rounded-lg hover:border-zinc-700 transition-all duration-75`}
          onClick={() => setOpen(!open)}
        >
          <img src="./src/assets/arrow.png" className="w-3" />
        </div>
        <div className="flex gap-x-2 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 rounded-full w-12 h-12 object-cover`}
          />
          <h1
            className={`text-white origin-left font-bold text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            CodeDeivid
          </h1>
        </div>
        <ul className="links-container pt-6 h-[95%] flex flex-col justify-between">
          <div className="flex flex-col gap-2.5">
            {appState.objects.map((menu, index) => (
              <Link
                to={`/${!menu.link ? menu.route : ""}`}
                className="flex items-center justify-between gap-2 w-full"
                key={index}
                onClick={() => {
                  toggleActive(index);
                }}
              >
                <li
                  className={`text-zinc-400 ${toggleActiveStyles(
                    index
                  )} w-full text-base flex items-center justify-between gap-x-4 cursor-pointer ${
                    !open ? "p-2" : "p-4"
                  } rounded-xl hover:text-white ${menu.gap ? "mt-9" : "mt-2"}`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <img src={`./public/assets/${menu.src}.png`} className="w-5" />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200 text-base`}
                    >
                      {menu.title}
                    </span>
                  </div>
                  <img
                    src={`./public/assets/${menu.link ? "link" : "ball"}.png`}
                    className={`${!open && "hidden"} w-4 animate-pulse`}
                  />
                </li>
              </Link>
            ))}
          </div>
          <a href="mailto:deividmickael@gmail.com">
            <li
              className={`text-zinc-400 text-base flex items-center justify-between gap-x-4 cursor-pointer ${
                !open ? "p-2" : "p-4"
              } rounded-md hover:text-white`}
            >
              <div className="flex items-center justify-center gap-2">
                <img src="./src/assets/email.png" className="w-5" />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-base`}
                >
                  Me mande um email
                </span>
              </div>
              <img
                src="./src/assets/link.png"
                className={`${!open && "hidden"} w-4`}
              />
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Header;
