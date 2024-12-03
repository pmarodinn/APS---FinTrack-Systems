"use client";

import { useState } from "react";
import Image from "next/image";

const LoginPage = () => {
  // Estados para armazenar os valores dos campos
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  // Função de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (usuario === "" || senha === "") {
      setErro("Por favor, preencha ambos os campos.");
    } else {
      setErro("");
      // Aqui você pode adicionar a lógica de autenticação
      console.log("Usuário:", usuario);
      console.log("Senha:", senha);
      // Exemplo de navegação para a página principal
      // window.location.href = "/dashboard";
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-lamaSkyLight">
      <div className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-6 w-96">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={24} height={24} />
          Sua Escola
        </h1>
        <h2 className="text-gray-400">Faça login na sua conta</h2>

        {/* Formulário de login */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-500">Nome de usuário</label>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
                className="p-2 rounded-md ring-1 ring-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-500">Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="p-2 rounded-md ring-1 ring-gray-300"
              />
            </div>

            {/* Exibição de erro */}
            {erro && <p className="text-xs text-red-400">{erro}</p>}

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md text-sm p-2 mt-4"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

