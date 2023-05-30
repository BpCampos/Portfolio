import React from 'react'

export default function Card({ info, mostraProjeto }: any) {
  return (
    <div
      className="w-1/2 shadow-xl shadow-black border rounded-xl hover:scale-105 duration-200 hover:cursor-pointer bg-slate-800 text-white"
      key={info.id}
      onClick={() => mostraProjeto(info.id)}>
      <h1 className="font-bold text-2xl text-center py-3">{info.nome}</h1>
      <img className="rounded-xl rounded-ss-none rounded-se-none" src={info.image} alt={info.nome} />
    </div>
  )
}
