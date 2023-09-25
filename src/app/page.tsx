import Competencias from '@/components/competencias/Competencias'
import Projetos from '@/components/Projetos'
import SobreMim from '@/components/SobreMim'

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-neutral-100 relative">
      <section className="grid place-content-center max-sm:gap-6 m-auto my-[100px]">
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
