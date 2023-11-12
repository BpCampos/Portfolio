'use client'
import Competencias from '@/components/competencias/Competencias'
import Projetos from '@/components/Projetos'
import SobreMim from '@/components/SobreMim'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
  const [upperSection, setUpperSection] = useState(false)
  const [middleSection, setMiddleSection] = useState(false)
  const [lowerSection, setLowerSection] = useState(false)

  const scrollToMiddle = useRef<any>()
  const scrollToLower = useRef<any>()

  useEffect(() => {
    scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  function goToUpperSection() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (upperSection === false) {
      setUpperSection(true)
      setMiddleSection(false)
      setLowerSection(false)
    }
  }
  function goToMiddleSection() {
    const middle = scrollToMiddle.current
    middle.scrollIntoView({ behavior: 'smooth' })

    if (middleSection == false) {
      setMiddleSection(true)
      setUpperSection(false)
      setLowerSection(false)
    }
  }
  function goToLowerSection() {
    const lower = scrollToLower.current
    lower.scrollIntoView({ behavior: 'smooth' })

    if (lowerSection == false) {
      setLowerSection(true)
      setUpperSection(false)
      setMiddleSection(false)
    }
  }
  console.log(upperSection, middleSection, lowerSection)

  return (
    <main className="max-w-[1440px] mx-auto flex flex-col justify-between bg-white relative">
      <div className="text-2xl select-none fixed right-0 top-[45%] w-[150px] font-bold text-white text-center">
        <section
          onClick={goToUpperSection}
          className={`border border-black text-white bg-slate-900 py-2 border-r-0 rounded-ss-xl 
          hover:cursor-pointer max-sm:hidden hover:text-blue-400 hover:bg-slate-600 duration-200 ${
            upperSection == true ? 'border-blue-400 bg-slate-600 text-blue-400' : ''
          }`}>
          Início
        </section>
        <section
          onClick={goToMiddleSection}
          className={`border border-black bg-slate-900 py-2 border-r-0 hover:cursor-pointer max-sm:hidden
           hover:text-blue-400 hover:bg-slate-600 duration-200 ${
             middleSection == true ? 'border-blue-400 bg-slate-600 text-blue-400' : ''
           }`}>
          Tecnologias
        </section>
        <section
          onClick={goToLowerSection}
          className={`border border-black bg-slate-900 py-2 border-r-0 rounded-es-xl hover:cursor-pointer max-sm:hidden
           hover:text-blue-400 hover:bg-slate-600 duration-200 ${
             lowerSection == true ? 'border-blue-400 bg-slate-600 text-blue-400' : ''
           }`}>
          Projetos
        </section>
      </div>
      <section className="grid place-content-center max-sm:gap-6 mt-[100px] max-sm:mb-[150px] max-sm:mt-12">
        <SobreMim />
      </section>
      <section ref={scrollToMiddle} className="mb-[130px]">
        <h1 className="text-center text-5xl font-bold max-sm:text-3xl mb-4 max-sm:-mt-0">Tecnologias</h1>
        <Competencias />
      </section>
      <section ref={scrollToLower} className="mt-[100px] max-sm:mt-0">
        <h1 className="text-center text-5xl font-bold mb-11 max-sm:text-3xl">Projetos</h1>
        <Projetos />
      </section>
    </main>
  )
}
