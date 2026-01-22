import { useState } from "react";

export function ForgotPassForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    // Logica de recuperação de senha aqui

    try {
      const response = await fetch("http://localhost:3333/auth/forgot-pass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao solicitar recuperação de senha");
      }

      navigate("/"); //! Somente para teste de login bem-sucedido
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      <p>Vemos que acabou esquecendo sua senha :( <br />Para recuperar sua conta, digite o email cadastrado no campo abaixo.</p>

      <form onSubmit={handleSubmit} className="flex flex-col mt-7">
        <input className="border border-black rounded-sm mb-4 bg-white p-1"
          type="text" placeholder="Email do usuário" value={email} onChange={(e) => setEmail(e.target.value)} required>
        </input>

        {error && (
          <span className="text-red-600 text-sm mb-2">
            {error}
          </span>
        )}

        <p>Após solicitar a recuperação de senha, enviaremos um TOKEN de validação de segurança contendo 6 digitos para o email inserido. <br />Pedimos que verifique todas as caixas de entrada (Principal, Spam...) para conferir o recebimento do TOKEN.</p>

        <input type="submit" value="Solicitar recuperação"
          className="bg-sky-900 text-white rounded-md mt-5 px-2 py-1 text-l font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-emerald-600" />
      </form>
    </>
  )
}