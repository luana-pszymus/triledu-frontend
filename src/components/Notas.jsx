import React from "react";

function Notas({ notas }) {
  return (
    <ul>
      {notas.map((n, i) => (
        <li key={i}>{n.avaliacao}: {n.valor_nota}</li>
      ))}
    </ul>
  );
}

export default Notas;
