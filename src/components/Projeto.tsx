export default function Projeto({ projeto }: any) {
  return (
    <div className="flex ml-4 max-sm:flex-col max-sm:ml-0">
      <section className="flex-1 max-sm:w-[90%] max-sm:mx-auto max-sm:shadow-2xl">
        <h1 className="text-center font-bold text-3xl max-sm:bg-slate-800 max-sm:text-white max-sm:rounded-t-lg bg-slate-800 w-5/6 mx-auto rounded-lg rounded-ee-none rounded-es-none py-1 text-white">
          {projeto.nome}
        </h1>
        <img src={projeto.image} alt={projeto.nome} className="w-5/6 m-auto rounded-lg max-sm:w-full rounded-ss-none" />
      </section>
      <section className="flex-1 mt-8 max-sm:w-full">
        <p className="text-xl font-bold w-3/4 bg-slate-800 text-white p-5 rounded-md max-sm:text-lg max-sm:w-[90%] max-sm:mx-auto">
          {projeto.descricao}
        </p>
        <h1 className="font-bold text-3xl mb-3 mt-10 max-sm:text-2xl max-sm:pl-2.5">Tecnologias utilizadas</h1>
        <ul className="flex flex-wrap gap-4 w-3/4 max-sm:w-full max-sm:px-3">
          {projeto.tecnologias.map((tecnologia: string) => {
            return (
              <li className="bg-slate-800 p-2 px-4 rounded-lg text-white font-bold max-sm:text-sm" key={tecnologia}>
                {tecnologia}
              </li>
            )
          })}
        </ul>
        <div
          className="w-80 mt-5 flex gap-9 max-sm:pl-3 max-sm:w-80
        ">
          <a href={projeto.github} target="blank">
            <img className="w-12 max-sm:w-10" src="../../images/github.png" alt="github" />
          </a>
          {projeto.website !== '' && (
            <a href={projeto.website} target="blank">
              <img className="w-12 max-sm:w-10" src="../../images/link-externo.png" alt="Link website" />
            </a>
          )}
        </div>
      </section>
    </div>
  )
}
