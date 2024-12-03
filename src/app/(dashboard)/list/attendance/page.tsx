"use client";

import { useState } from "react";
import Image from "next/image";
import AttendanceChart from "@/components/AttendanceChart"; // Caminho do seu componente de gráfico

// Exemplo de dados de alunos (substitua por dados reais de uma API)
const alunosExemplo = [
  { id: 1, nome: "João Silva", presente: false },
  { id: 2, nome: "Maria Oliveira", presente: false },
  { id: 3, nome: "Carlos Pereira", presente: false },
  { id: 4, nome: "Ana Costa", presente: false },
  { id: 5, nome: "Lucas Souza", presente: false },
];

const AttendancePage = () => {
  // Estado para armazenar a lista de alunos com seu status de presença
  const [alunos, setAlunos] = useState(alunosExemplo);

  // Função para alternar o estado de presença de um aluno
  const togglePresenca = (id: number) => {
    setAlunos((prevAlunos) =>
      prevAlunos.map((aluno) =>
        aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
      )
    );
  };

  // Função para contar o número de alunos presentes e ausentes
  const contarPresencas = () => {
    const presentes = alunos.filter((aluno) => aluno.presente).length;
    const ausentes = alunos.length - presentes;
    return { presentes, ausentes };
  };

  const { presentes, ausentes } = contarPresencas();

  return (
    <div className="h-screen flex flex-col items-center bg-lamaSkyLight p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Marcar Presença</h1>
        <div className="space-y-4">
          {alunos.length > 0 ? (
            alunos.map((aluno) => (
              <div
                key={aluno.id}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex justify-between items-center"
              >
                <span className="text-lg">{aluno.nome}</span>
                <button
                  onClick={() => togglePresenca(aluno.id)}
                  className={`px-4 py-2 rounded-md text-white ${
                    aluno.presente ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {aluno.presente ? "Presente" : "Ausente"}
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Não há alunos para exibir.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default AttendancePage;
