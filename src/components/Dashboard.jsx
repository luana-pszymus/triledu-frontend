import React, { useEffect, useState } from "react";
import Faltas from "./Faltas";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/dashboard/1")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar dashboard");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Aluno não encontrado.</p>;

  return (
    <div>
      <h1>Dashboard do Aluno</h1>
      <p>Nome: {data.aluno.nome_aluno}</p>
      <p>RA: {data.aluno.ra_aluno}</p>

      <h2>Notas</h2>
      {data.notas.length > 0 ? (
        <ul>
          {data.notas.map((nota) => (
            <li key={nota.id_nota}>
              {nota.disciplina}: {nota.valor}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma nota registrada.</p>
      )}

      <h2>Turmas</h2>
      {data.turmas.length > 0 ? (
        <ul>
          {data.turmas.map((turma) => (
            <li key={turma.id_turma}>{turma.nome_turma}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma turma registrada.</p>
      )}

      <h2>Faltas</h2>
      <Faltas alunoId={data.aluno.id_aluno} />
    </div>
  );
}

export default Dashboard;
