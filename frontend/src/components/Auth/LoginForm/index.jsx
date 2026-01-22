import { useState } from 'react';
import { useNavigate } from 'react-router';

import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export function LoginForm() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    // Logica de login aqui

    try {
      const response = await fetch("http://localhost:3333/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao fazer login");
      }

      navigate("/"); // Somente para teste de login bem-sucedido
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      <img src={logo} alt="Logo VS Billing" className="w-30 mx-auto mb-5" />

      <form onSubmit={handleSubmit} className="flex flex-col">
        <input className="border border-black rounded-sm mb-4 bg-white p-1"
          type="text" placeholder="Email do usuário" value={email} onChange={(e) => setEmail(e.target.value)} required>
        </input>

        <input className="border border-black rounded-sm mb-1 bg-white p-1"
          type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required>
        </input>

        {error && (
          <span className="text-red-600 text-sm mb-2">
            {error}
          </span>
        )}

        <Link to="/forgot-pass" className="mb-6 font-semibold hover:text-emerald-900">Esqueceu a senha?</Link>

        <input type="submit" value="Entrar"
          className="bg-sky-900 text-white rounded-md px-2 py-1 text-l font-semibold cursor-pointer transition-all duration-400 ease-in-out hover:bg-emerald-600" />
      </form>

      <Link to="/sign-in" className="mt-auto hover:text-emerald-900">
        <p>Novo por aqui? Crie sua conta 👈.</p>
      </Link>
    </>
  )
}
