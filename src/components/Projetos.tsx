'use client'
import React, { ReactElement, useState } from 'react'
import cards from '../json/cards.json'
import Projeto from './Projeto'
import { info } from 'autoprefixer'
import Card from './Card'

export default function Projetos(): ReactElement {
  const [card, setCard] = useState(cards)
  const [projeto, setProjeto] = useState([{}])
  const [show, setShow] = useState(false)
  const [selectedCard, setSelectedCard] = useState(cards)

  function mostraProjeto(id: number): void {
    const projetoAtivo = card.filter((info) => {
      return info.id === id
    })
    if (projetoAtivo) {
      setShow(true)
      setSelectedCard(projetoAtivo)
    }
    setProjeto(projetoAtivo)
  }

  if (show === true) {
    return (
      <div>
        {projeto.map((info) => {
          return <Projeto key={info} projeto={info} />
        })}
        <div className="flex justify-center gap-10 mb-[100px]">
          {card.map((info) => {
            return (
              <div
                className={
                  selectedCard[0].id === info.id
                    ? 'w-[300px] mt-[100px] shadow-2xl shadow-black border rounded-xl scale-110 text-green-400 duration-200 hover:cursor-pointer bg-slate-800'
                    : 'w-[300px] mt-[100px] shadow-xl shadow-black border rounded-xl hover:scale-105 duration-200 hover:cursor-pointer bg-slate-800 text-white'
                }
                key={info.id}
                onClick={() => mostraProjeto(info.id)}>
                <h1 className="font-bold text-2xl text-center py-3">{info.nome}</h1>
                <img className="rounded-xl rounded-ss-none rounded-se-none w-full" src={info.image} alt={info.nome} />
              </div>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div className="grid grid-cols-2 place-items-center gap-y-14 mb-10">
        {card.map((info) => {
          return <Card key={info.id} info={info} mostraProjeto={mostraProjeto} />
        })}
      </div>
    )
  }
}