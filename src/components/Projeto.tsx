import { ReactNode } from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Projeto({ projeto }: any) {
  const text = <Typewriter words={projeto.descricao} typeSpeed={25} />

  return (
    <div className="flex ml-4">
      <section className="flex-1 ">
        <h1 className="text-center font-bold text-3xl">{projeto.nome}</h1>
        <img src={projeto.image} alt={projeto.nome} className="w-5/6 m-auto rounded-lg" />
      </section>
      <section className="flex-1 mt-8">
        <p className="text-xl font-bold w-3/4 bg-slate-800 text-white p-5 rounded-md">{projeto.descricao}</p>
        <h1 className="font-bold text-3xl mb-3 mt-10">Tecnologias utilizadas</h1>
        <ul className="flex flex-wrap gap-4 w-3/4">
          {projeto.tecnologias.map((tecnologia: string) => {
            return (
              <li className="bg-slate-800 p-2 px-4 rounded-lg text-white font-bold" key={tecnologia}>
                {tecnologia}
              </li>
            )
          })}
        </ul>
        <div className="w-80 mt-5 flex gap-9">
          <a href={projeto.github} target="blank">
            <img className="w-12" src="../../images/github.png" alt="github" />
          </a>
          {projeto.website !== '' && (
            <a href={projeto.website} target="blank">
              <img className="w-12" src="../../images/link-externo.png" alt="Link website" />
            </a>
          )}
        </div>
      </section>
    </div>
  )
}
