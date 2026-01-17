export function ForgotPassForm() {
  return (
    <>
      <p>Vemos que acabou esquecendo sua senha :( <br />Para recuperar sua conta, digite o email cadastrado no campo abaixo.</p>

      <form action="#" method="get" className="flex flex-col mt-7">
        <input className="border border-black rounded-sm mb-4 bg-white p-1"
          type="text" placeholder="Email do usuário" required></input>

        <p>Após solicitar a recuperação de senha, enviaremos um TOKEN de validação de segurança contendo 6 digitos para o email inserido. <br />Pedimos que verifique todas as caixas de entrada (Principal, Spam...) para conferir o recebimento do TOKEN.</p>

        <input type="submit" value="Solicitar recuperação"
          className="bg-sky-900 text-white rounded-md mt-5 px-2 py-1 text-l font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-emerald-600" />
      </form>
    </>
  )
}