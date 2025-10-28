import React, { useEffect, useState } from "react";

function Faltas({ alunoId }) {
  const [faltas, setFaltas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!alunoId) return; // evita fetch com undefined

    setLoading(true);
    fetch(`http://localhost:3000/api/faltas/${alunoId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar faltas");
        return res.json();
      })
      .then((data) => {
        setFaltas(data.faltas || []); // garante array
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [alunoId]);

  if (loading) return <p>Carregando faltas...</p>;
  if (error) return <p>{error}</p>;
  if (faltas.length === 0) return <p>Nenhuma falta registrada.</p>;

  return (
    <div>
      <h2>Faltas</h2>
      <ul>
        {faltas.map((falta) => (
          <li key={falta.id_falta}>
            {falta.data_falta} - {falta.disciplina}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faltas;
