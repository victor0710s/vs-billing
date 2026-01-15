import logo from '../../assets/images/logo.png'

export function Login() {
  return (
    <div className=
      "bg-white/20 w-1/3 h-110 rounded-xl backdrop-blur-md border border-white/20 p-5 flex gap-3"
    >
      <div className="sign-in w-1/2 h-full p-4 flex flex-col">
        <img src={logo} alt="Logo VS Billing" className='w-30 mx-auto mb-5'/>

        <h1 className="text-2xl text-white mb-5">Login</h1>

        <form action="#" method="get" className='flex flex-col'>
          <input className="border border-black rounded-sm mb-4 bg-white p-1" 
          type="text" placeholder="Email do usuário" required></input>

          <input className="border border-black rounded-sm mb-6 bg-white p-1" 
          type="password" placeholder="Senha" required></input>

          <input type="submit" value="Entrar" 
            className='bg-emerald-600 rounded-md px-2 py-1 text-l font-semibold cursor-pointer'/>
        </form>
      </div>
      
      <div className="sign-up bg-amber-400 w-1/2 h-full">
      </div>
    </div>
  )
}