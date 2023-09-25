import React from 'react'

export default function SobreMim() {
  return (
    <div className="h-[100vh] relative top-[10%] max-sm:h-full">
      <p className="text-6xl font-bold ml-2 max-sm:text-lg max-sm:ml-0.5">Ola, sou o Bruno Campos</p>
      <p className="text-[140px] font-bold max-sm:text-5xl -mt-4 max-sm:-mt-0">Desenvolvedor</p>
      <div className="flex gap-4 max-sm:gap-1 max-sm:mt-2 max-sm:block ">
        <p className="text-[140px] font-bold bg-slate-700 text-white px-8 max-sm:text-5xl max-sm:w-fit max-sm:px-3 max-sm:pb-1 h-fit">
          Full Stack
        </p>
        <div className="grid gap-8 grid-cols-2 justify-items-center items-center w-1/4 max-sm:flex max-sm:w-full max-sm:mt-2 ">
          <a href="https://www.linkedin.com/in/bruno-campos98/" target="blank" className="w-16 max-sm:w-8">
            <img className="hover:cursor-pointer hover:scale-110 duration-150" src="../../images/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/BpCampos" target="blank" className="w-16 max-sm:w-8">
            <img className="hover:cursor-pointer hover:scale-110 duration-150" src="../../images/github.png" alt="" />
          </a>
          <a href="mailto:campos.bruno98@gmail.com" target="blank" className="w-16 max-sm:w-8">
            <img className="hover:cursor-pointer hover:scale-110 duration-150" src="../../images/gmail.png" alt="" />
          </a>
          <a href="../../doc/Curriculo.pdf" title="Currículo" className="w-16 max-sm:w-8" download="Curriculo">
            <img
              className="hover:cursor-pointer hover:scale-110 duration-150"
              src="../../images/curriculo.png"
              alt="Currículo"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
