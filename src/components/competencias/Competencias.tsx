'use client'
import React, { useEffect, useRef, useState } from 'react'
import Competencia from './Competencia'

export default function Competencias() {
  const competencia1: React.LegacyRef<HTMLElement> | any = useRef()
  const competencia2: React.LegacyRef<HTMLElement> | any = useRef()

  const [cords, setCords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleWindowMouseMove = (event: any) => {
      setCords({
        y: event.clientY,
        x: event.clientX,
      })
    }

    window.addEventListener('mousemove', handleWindowMouseMove)
  }, [])

  function mouseOver1() {
    const rotateYC1 =
      ((cords.y -
        (competencia1.current.getBoundingClientRect().y + competencia1.current.getBoundingClientRect().height / 2)) /
        (competencia1.current.getBoundingClientRect().height / 2)) *
      10

    const rotateXC1 =
      ((cords.x -
        (competencia1.current.getBoundingClientRect().x + competencia1.current.getBoundingClientRect().width / 2)) /
        (competencia1.current.getBoundingClientRect().width / 2)) *
      20 *
      -1

    competencia1.current.style.transform = `perspective(1000px) rotateX(${rotateYC1}deg) rotateY(${rotateXC1}deg) scale3d(1.05, 1.05, 1.05)`
    competencia1.current.style.transition = `0ms`
  }

  function mouseOver2() {
    const rotateYC2 =
      ((cords.y -
        (competencia2.current.getBoundingClientRect().y + competencia2.current.getBoundingClientRect().height / 2)) /
        (competencia2.current.getBoundingClientRect().height / 2)) *
      10

    const rotateXC2 =
      ((cords.x -
        (competencia2.current.getBoundingClientRect().x + competencia2.current.getBoundingClientRect().width / 2)) /
        (competencia2.current.getBoundingClientRect().width / 2)) *
      20 *
      -1

    competencia2.current.style.transform = `perspective(1000px) rotateX(${rotateYC2}deg) rotateY(${rotateXC2}deg) scale3d(1.05, 1.05, 1.05)`
    competencia2.current.style.transition = `0ms`
  }

  function mouseLeave() {
    competencia1.current.style.transform = `none`
    competencia1.current.style.transition = `300ms`
    competencia2.current.style.transform = `none`
    competencia2.current.style.transition = `300ms`
  }

  return (
    <div>
      <div className="flex m-auto justify-center gap-48 max-sm:gap-24 p-10 max-sm:flex-col ">
        <section
          ref={competencia1}
          onMouseMove={() => mouseOver1()}
          onMouseLeave={() => mouseLeave()}
          className="border-2 border-black rounded-lg py-4 w-[500px] max-sm:w-full bg-slate-800 text-white shadow-xl shadow-slate-600">
          <p className="text-center text-2xl font-bold mb-5 max-sm:text-xl">FRONT END</p>
          <ul className="grid grid-cols-2 gap-y-5 [&>*]:text-center px-10 [&>*]:font-bold flex-wrap max-sm:grid max-sm:grid-cols-3 max-sm:gap-x-3 max-sm:text-base max-sm:px-0">
            <Competencia
              nome={'Javascript'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'}
            />
            <Competencia
              nome={'Typescript'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'}
            />
            <Competencia
              nome={'HTML'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'}
            />
            <Competencia
              nome={'CSS'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'}
            />
            <Competencia
              nome={'React'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'}
            />
            <Competencia
              nome={'Bootstrap'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'}
            />
            <Competencia
              nome={'Tailwind'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'}
            />
          </ul>
        </section>

        <section
          onMouseMove={() => mouseOver2()}
          onMouseLeave={() => mouseLeave()}
          ref={competencia2}
          className="border-2 border-black rounded-lg py-4 w-[500px] max-sm:w-full shadow-xl shadow-slate-600 bg-slate-800 text-white">
          <p className="text-center text-2xl font-bold mb-5 max-sm:text-xl">BACK END</p>
          <ul className=" grid grid-cols-2 gap-y-5 [&>*]:text-center px-10 [&>*]:font-bold flex-wrap max-sm:grid max-sm:grid-cols-3 max-sm:gap-x-3 max-sm:text-base max-sm:px-0">
            <Competencia
              nome={'Node'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'}
            />
            <Competencia nome={'Express'} src={'https://img.icons8.com/office/60/express-js.png'} />
            <Competencia
              nome={'MySQL'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'}
            />
            <Competencia
              nome={'Sequelize'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg'}
            />
            <Competencia nome={'Postman'} src={'../../images/postman-icon.png'} />
            <Competencia nome={'Prisma'} src={'../../images/prisma.png'} />
            <Competencia
              nome={'MongoDB'}
              src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'}
            />
          </ul>
        </section>
      </div>
    </div>
  )
}
