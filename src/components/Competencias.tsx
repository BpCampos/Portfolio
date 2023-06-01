'use client'
import React, { useEffect, useRef, useState } from 'react'

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
      20

    competencia1.current.style.transform = `rotateX(${rotateYC1}deg) rotateY(${rotateXC1}deg)`
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
      20

    competencia2.current.style.transform = `rotateX(${rotateYC2}deg) rotateY(${rotateXC2}deg)`
  }

  function mouseLeave() {
    competencia1.current.style.transform = `rotateY(0deg)`
    competencia1.current.style.transform = `rotateX(0deg)`
    competencia2.current.style.transform = `rotateY(0deg)`
    competencia2.current.style.transform = `rotateX(0deg)`
  }

  return (
    <div>
      <h1 className="text-center text-5xl font-bold">Tecnologias</h1>
      <div className="flex m-auto justify-center gap-10 p-10">
        <section
          ref={competencia1}
          onMouseMove={() => mouseOver1()}
          onMouseLeave={() => mouseLeave()}
          className="border-2 border-black rounded-lg py-4 w-1/2 shadow-xl shadow-slate-800 skew-y-1">
          <p className="text-center text-2xl font-bold mb-5">Front End</p>
          <ul className="[&>*]:w-20 flex justify-between gap-5 [&>*]:text-center px-10 [&>*]:font-bold flex-wrap">
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
              Javascript
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
              Typescript
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              HTML
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              CSS
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              React
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
              Bootstrap
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
              Tailwind
            </li>
          </ul>
        </section>
        <section
          onMouseMove={() => mouseOver2()}
          onMouseLeave={() => mouseLeave()}
          ref={competencia2}
          className="border-2 border-black rounded-lg py-4 w-1/2 shadow-xl shadow-slate-800">
          <p className="text-center text-2xl font-bold mb-5">Back End</p>
          <ul className="[&>*]:w-20 flex gap-5 justify-between [&>*]:text-center px-10 [&>*]:font-bold flex-wrap">
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              Node
            </li>
            <li>
              <img src="https://img.icons8.com/office/60/express-js.png" alt="express-js" className="w-20 h-20" />
              Express
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
              MySQL
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
              Sequelize
            </li>
            <li>
              <img src="../../images/postman-icon.png" />
              Postman
            </li>
            <li>
              <img src="../../images/prisma.png" className="w-20 h-20" />
              Prisma
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
