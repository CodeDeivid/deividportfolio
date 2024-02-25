function xpCard(props) {
  return (
    <div className="card-xp flex flex-col md:flex-row mt-0 pb-10">
      <div className="flex w-full max-w-fit font-medium text-lg lg:text-xl text-zinc-400 mr-10">{props.date}</div>
      <div>
        <h3 className="text-white text-2xl lg:text-3xl font-semibold">{props.name}</h3>
        <p className="font-medium text-neutral-400 text-lg lg:text-xl">{props.type}</p>
        <p className="mt-4 text-neutral-400 text-lg lg:text-xl">{props.desc}</p>
      </div>
    </div>
  )
}

export default xpCard