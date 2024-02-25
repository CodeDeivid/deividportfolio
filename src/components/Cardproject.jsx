import PropTypes from 'prop-types';

function Cardproject(props) {
  return (
    <div className="card-project border-[1px] border-darkBorder rounded-xl">
      <img src={`${props.src}`} className="w-ful rounded-tr-xl rounded-tl-xl" id="bg-project" alt="Project background"/>
      <div className="flex flex-col text-white p-4 w-full">
        <div>
          <h2 className="text-base sm:text-lg xl:text-xl font-semibold">{props.title}</h2>
          <p className="text-sm sm:text-base lg:text-base text-zinc-400">{props.desc}</p>
        </div>

        <div className="buttons-proj hidden max-2xl:flex items-center justify-center gap-2 mt-4">
          <a href={`${props.details}`} target="_blank" className="card-project-button flex flex-row-reverse items-center rounded-xl bg-white text-zinc-950 border-[1px] border-zinc-700 p-3 w-full hover:bg-transparent hover:text-white transition-all justify-center font-semibold duration-700 gap-2 group/edit">
            Detalhes
            <img src="./src/assets/details.png" alt="Details icon" className="brightness-0 w-3 transition-all duration-700 group/edit"/>
          </a>
          <a href={`${props.github}`} target="_blank" className="flex flex-row-reverse items-center rounded-xl bg-zinc-500 border-[1px] border-zinc-700 p-3 gap-2 w-full hover:brightness-150 transition-all justify-center duration-300 group/edit" id="email-button">
            GitHub
            <img src="/assets/github-2.png" alt="GitHub icon" className="brightness-100 w-3 transition-all duration-700 group/edit"/>
          </a>
        </div>
      </div>
    </div>
  );
}

Cardproject.propTypes = {
  src: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Cardproject;