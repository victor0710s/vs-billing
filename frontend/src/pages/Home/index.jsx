import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-400/50 text-white">
      {/* HEADER */}
      <header className="flex items-center px-6 py-4 h-20">
        <img src={logo} alt="Logo VS Billing" className="w-16" />
        <div className="w-full h-full flex items-center gap-10 justify-end mr-10">
          <Link to="/login">
            <button className="bg-sky-900 text-white rounded-md px-4 py-1 text-l font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-emerald-600">Login</button>
          </Link>
          <Link to="/sign-in" className=''>
            <button className="bg-sky-900 text-white rounded-md px-4 py-1 text-l font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-emerald-600">Sign In</button>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="py-10 text-center">
        <h1 className="text-5xl font-bold text-sky-900">VS <span className="text-emerald-600">Billing</span></h1>
        <h2 className="text-4xl font-bold italic mt-5">
          Controle financeiro simples e rápido
        </h2>
        <p className="mt-4 text-neutral-500">
          Organize e monitore seus gastos em minutos.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid gap-8 px-6 md:grid-cols-3">
        <div className="rounded-xl bg-neutral-900 p-6">Feature 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iusto vel aliquam fugiat nemo qui tempora corporis maxime, ullam assumenda recusandae eveniet ad, in deserunt facilis molestias esse eius illum eos nam, molestiae sed inventore tenetur reprehenderit. Voluptatibus laboriosam quae, maiores quisquam repudiandae pariatur omnis, facilis tenetur ratione odio blanditiis quod magni. Modi voluptatum possimus distinctio consequuntur est. Qui fugiat ipsum minima repellendus facere, quas officia illum! Odit qui quam sint ut totam exercitationem quasi nobis repudiandae, consequatur vel. Voluptatibus, culpa rem error repellat itaque necessitatibus fuga nesciunt modi, vitae ad eum distinctio impedit accusamus ea soluta similique aliquid est non quod labore fugiat facilis, dolores asperiores? Quisquam, debitis itaque?</div>
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
      <div className=''>

      </div>
    </div>
  )
}