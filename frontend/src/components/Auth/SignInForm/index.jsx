import { Link } from 'react-router-dom';

export function SignInForm() {
  return (
    <>
      <form action="#" method="get" className="flex flex-col">
        <p>Nome completo:</p>
        <input className="border border-black rounded-sm mb-3 bg-white p-1"
          type="text" placeholder="Email do usuário" required></input>

        <p>Email:</p>
        <input className="border border-black rounded-sm mb-3 bg-white p-1"
          type="text" placeholder="Email do usuário" required></input>

        <p>Senha:</p>
        <input className="border border-black rounded-sm mb-3 bg-white p-1"
          type="password" placeholder="Senha" required></input>

        <p>Confirme a senha:</p>
        <input className="border border-black rounded-sm mb-3 bg-white p-1"
          type="password" placeholder="Confirme a senha" required></input>

        <input type="submit" value="Criar conta"
          className="bg-sky-900 text-white rounded-md px-2 py-1 text-l font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-emerald-600 mb-auto" />
      </form>
    </>
  )
}