'use client'
import Competencias from '@/components/competencias/Competencias'
import Projetos from '@/components/Projetos'
import SobreMim from '@/components/SobreMim'
import { useEffect, useState } from 'react'
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function Home() {
  const [upButton, setUpButton] = useState('upper')
  const [downButton, setDownButton] = useState('upper')

  useEffect(() => {
    scrollTo({ top: 0, behavior: 'smooth' })
    setDownButton('upper')
    setUpButton('upper')
  }, [])

  function changeUpPosition() {
    if (upButton == 'middle') {
      setUpButton('upper')
      setDownButton('upper')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (upButton == 'bottom') {
      setUpButton('middle')
      setDownButton('middle')
      window.scrollTo({ top: 900, behavior: 'smooth' })
    }
  }

  function changeDownPosition() {
    if (downButton == 'upper') {
      setDownButton('middle')
      setUpButton('middle')
      window.scrollTo({ top: 900, behavior: 'smooth' })
    } else if (downButton == 'middle') {
      setDownButton('bottom')
      setUpButton('bottom')
      window.scrollTo({ top: 2000, behavior: 'smooth' })
    }
  }

  return (
    <main className="flex flex-col justify-between bg-neutral-100 relative">
      <div className="  text-5xl">
        {upButton != 'upper' && (
          <BsFillArrowUpCircleFill
            className={`hover: cursor-pointer text-slate-800 fixed right-4 bottom-20`}
            onClick={changeUpPosition}
          />
        )}
        {downButton != 'bottom' && (
          <BsFillArrowDownCircleFill
            className="hover: cursor-pointer text-slate-800 fixed right-4 bottom-4"
            onClick={changeDownPosition}
          />
        )}
      </div>
      <section className="grid place-content-center max-sm:gap-6 m-auto my-[100px]">
        <SobreMim />
      </section>
      <section className="mb-[100px]">
        <Competencias />
      </section>
      <section className="mt-[100px]">
        <h1 className="text-center text-5xl font-bold mb-11 max-sm:text-3xl">Projetos</h1>
        <Projetos />
      </section>
    </main>
  )
}
