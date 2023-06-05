import React from 'react'

interface CompetenciaInfo {
  nome: string
  src: string
}

export default function Competencia({ nome, src }: CompetenciaInfo) {
  return (
    <li className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full">
      <img src={src} className="w-20 h-20 max-sm:w-14 max-sm:h-14" />
      <p>{nome}</p>
    </li>
  )
}
