"use client";

import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex flex-col items-center justify-center text-white text-center">
      <div className="w-full max-w-3xl px-4">
        {/* Logo e título */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png" // Adicione seu logo aqui
            alt="Logo da escola"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Bem-vindo ao <span className="text-yellow-400">FinTrack Systems</span>
        </h1>
        <p className="text-lg mb-6">
          A plataforma de gestão escolar para facilitar o seu aprendizado.
        </p>

        {/* Botão de Login */}
        <div>
          <Link
            href="/sign-in"
            className="inline-block bg-yellow-400 text-black text-xl font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105 hover:bg-yellow-500"
          >
            Acessar Minha Conta
          </Link>
        </div>
      </div>

      {/* Rodapé */}
      <div className="absolute bottom-4 w-full text-center text-sm">
        <p>&copy; 2024 FinTrack Systems. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default HomePage;
