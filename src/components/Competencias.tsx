import React from 'react'

export default function Competencias() {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold">Tecnologias</h1>
      <div className="flex m-auto justify-center gap-10 p-10">
        <section className="border-2 border-black rounded-lg py-4 w-1/2">
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
        <section className="border-2 border-black rounded-lg py-4 w-1/2">
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
