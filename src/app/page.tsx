import Competencias from '@/components/competencias/Competencias'
import Projetos from '@/components/Projetos'
import SobreMim from '@/components/SobreMim'

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-neutral-300 relative gap-6">
      <section className="grid place-content-center w-1/2 m-auto my-[100px]">
        <SobreMim />
      </section>
      <section className="mb-[100px]">
        <Competencias />
      </section>
      <section>
        <h1 className="text-center text-5xl font-bold mb-11 max-sm:text-3xl">Projetos</h1>
        <Projetos />
      </section>
    </main>
  )
}
