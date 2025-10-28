import React from "react";

function Horario({ turmas }) {
  return (
    <ul>
      {turmas.map((t, i) => (
        <li key={i}>{t.nome_aluno} - Turma ID: {t.id_turma}</li>
      ))}
    </ul>
  );
}

export default Horario;
