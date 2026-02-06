import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SignUpForm() {
  // Cria variaveis de estado para armazenar os valores dos campos do formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    // Evita o comportamento padrao do formulario, que seria recarregar a pagina
    e.preventDefault();
    setError("");

    // Verifica se as senhas conferem
    if (password !== confirmPassword) {
      setError("As senhas não conferem!");
      // Se nao conferem, o return pausa a execucao da funcao antes de enviar algo para o backend
      return;
    }

    try {
      const response = await fetch("http://localhost:3333/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao criar conta");
      }

      // Se a conta for criada...
      alert("Conta criada com sucesso!");
    } catch (err) {
      // Se der algum erro, exibe na tela
      setError(err.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <p>Nome completo:</p>
        <input className="border border-black rounded-sm mb-3 bg-white p-1"
          type="text" placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} required></input>

        <p>Email:</p>
        <input className="border border-black rounded-sm mb-3 bg-white p-1"
          type="text" placeholder="Email do usuário" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        <p>Senha:</p>
        <input className="border border-black rounded-sm mb-3 bg-white p-1"
          type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required></input>

        <p>Confirme a senha:</p>
        <input className="border border-black rounded-sm mb-3 bg-white p-1"
          type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required></input>

        {error && (
          <span className="text-red-600 text-sm mb-2">
            {error}
          </span>
        )}

        <input type="submit" value="Criar conta"
          className="bg-sky-900 text-white rounded-md px-2 py-1 text-l font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-emerald-600 mb-auto" />


        <Link to="/login" className="text-sm text-sky-800 mt-5">
          Já tem conta? Entrar
        </Link>
      </form>
    </>
  )
}