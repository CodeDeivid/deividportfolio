import PropTypes from 'prop-types';

function Cardformation(props) {
  return (
    <li>
    <div className="flex flex-col items-center justify-between w-full h-fit bg-zinc-900 overflow-hidden gap-1 border-[1px] border-transparent hover:bg-transparent text-zinc-400 hover:text-white transition-all duration-300 group">
      <div className="flex w-full h-full">
        <div className="sm:bg-neutral-800/40 bg-white group-hover:bg-white transition-all duration-300">
          <img src={`${props.src}`} className="w-20 sm:w-32 sm:grayscale group-hover:grayscale-0 transition-all duration-300 sm:invert group-hover:invert-0"/>
        </div>
        <div className="flex w-full items-center justify-between px-2 sm:px-4">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xs sm:text-lg text-white">
              {props.title}
            </h1>
            <p className="text-zinc-400 text-xs font-normal sm:text-base">
              {props.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  </li>
  );
}

Cardformation.propTypes = {
  src: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cardformation;