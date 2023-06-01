import React from 'react'

export default function SobreMim() {
  return (
    <div>
      <p className="text-3xl font-bold ml-2">Ola, sou o Bruno Campos</p>
      <p className="text-9xl font-bold">Desenvolvedor</p>
      <div className="flex gap-4">
        <p className="text-9xl font-bold bg-slate-700 text-white px-1 pr-2">Full Stack</p>
        <div className="text-base">
          <p className="font-bold">
            Formado em Economia pela <span className="text-blue-800 font-extrabold">PUC-SP</span>
          </p>
          <p className="font-bold">Apaixonado por tecnologia</p>
        </div>
      </div>
      <div className="flex gap-10 ml-1 mt-3">
        <a href="https://www.linkedin.com/in/bruno-campos98/" target="blank" className="w-12">
          <img className="hover:cursor-pointer hover:scale-110 duration-150" src="../../images/linkedin.png" alt="" />
        </a>
        <a href="https://github.com/BpCampos" target="blank" className="w-12">
          <img className="hover:cursor-pointer hover:scale-110 duration-150" src="../../images/github.png" alt="" />
        </a>
        <a href="mailto:campos.bruno98@gmail.com" target="blank" className="w-12">
          <img className="hover:cursor-pointer hover:scale-110 duration-150" src="../../images/gmail.png" alt="" />
        </a>
        <a href="../../doc/Curriculo.pdf" title="Currículo" className="w-12" download="Curriculo">
          <img
            className="hover:cursor-pointer hover:scale-110 duration-150"
            src="../../images/curriculo.png"
            alt="Currículo"
          />
        </a>
      </div>
    </div>
  )
}
