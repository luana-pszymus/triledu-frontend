import React from "react";

function Avisos({ avisos }) {
  return (
    <ul>
      {avisos.map((aviso, i) => (
        <li key={i}>{aviso.texto}</li>
      ))}
    </ul>
  );
}

export default Avisos;
