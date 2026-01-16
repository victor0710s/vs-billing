import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      
      {/* HERO */}
      <section className="py-24 text-center">
        <h1 className="text-4xl font-bold">
          Controle financeiro simples e rápido
        </h1>
        <p className="mt-4 text-neutral-400">
          Organize seus gastos em minutos.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid gap-8 px-6 md:grid-cols-3">
        <div className="rounded-xl bg-neutral-900 p-6">Feature 1</div>
        <div className="rounded-xl bg-neutral-900 p-6">Feature 2</div>
        <div className="rounded-xl bg-neutral-900 p-6">Feature 3</div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <Link to="/login" className="cursor-pointer">
          <button className="rounded-lg bg-blue-600 px-8 py-4 font-medium">
            Começar agora
          </button>
        </Link>
      </section>

    </div>
  )
}