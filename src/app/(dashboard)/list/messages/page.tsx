"use client";

import { useState, useEffect } from "react";

// Simulação de dados de mensagens (substitua por chamadas reais de API)
const mensagensExemplo = [
  {
    id: 1,
    titulo: "Mensagem 1",
    conteudo: "Esta é a primeira mensagem. Ela contém algum texto.",
    data: "2024-12-02T14:00:00Z",
  },
  {
    id: 2,
    titulo: "Mensagem 2",
    conteudo: "Aqui está a segunda mensagem. Informações adicionais podem estar aqui.",
    data: "2024-12-02T15:00:00Z",
  },
  {
    id: 3,
    titulo: "Mensagem 3",
    conteudo: "Mais uma mensagem para visualizar. Esta contém texto adicional.",
    data: "2024-12-02T16:00:00Z",
  },
];

const MessagesPage = () => {
  // Estado para armazenar as mensagens
  const [mensagens, setMensagens] = useState<any[]>([]);

  // Simulação de carregamento de mensagens, como se fosse de uma API
  useEffect(() => {
    setMensagens(mensagensExemplo);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center bg-lamaSkyLight p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Mensagens</h1>
        <div className="space-y-4">
          {mensagens.length > 0 ? (
            mensagens.map((mensagem) => (
              <div
                key={mensagem.id}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <h2 className="text-xl font-semibold">{mensagem.titulo}</h2>
                <p className="text-gray-500">{mensagem.conteudo}</p>
                <p className="text-xs text-gray-400 mt-2">
                  Enviado em: {new Date(mensagem.data).toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Não há mensagens para exibir.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
