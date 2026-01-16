import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className=
      "bg-gray-400/50 w-1/5 h-110 rounded-xl backdrop-blur-md border border-white/70 shadow-2xl p-5 flex gap-3"
    >
      <div className="sign-in w-full h-full p-4 flex flex-col">
        <img src={logo} alt="Logo VS Billing" className='w-30 mx-auto mb-5'/>

        <form action="#" method="get" className='flex flex-col'>
          <input className="border border-black rounded-sm mb-4 bg-white p-1" 
          type="text" placeholder="Email do usuário" required></input>

          <input className="border border-black rounded-sm mb-1 bg-white p-1" 
          type="password" placeholder="Senha" required></input>

          <Link to="/forgot-pass" className="mb-6 font-semibold hover:text-emerald-900">Esqueceu a senha?</Link>

          <input type="submit" value="Entrar" 
            className='bg-sky-900 text-white rounded-md px-2 py-1 text-l font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-emerald-600'/>
        </form>
      </div>
    </div>
  )
}