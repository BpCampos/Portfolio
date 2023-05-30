import Competencias from '@/components/Competencias'
import Projetos from '@/components/Projetos'
import SobreMim from '@/components/SobreMim'

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <section className="grid place-content-center w-1/2 m-auto my-[100px]">
        <SobreMim />
      </section>
      <section className="mb-[100px]">
        <Competencias />
      </section>
      <section>
        <h1 className="text-center text-5xl font-bold mb-11">Projetos</h1>
        <Projetos />
      </section>
    </main>
  )
}
