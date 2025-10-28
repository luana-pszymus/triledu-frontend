import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Avisos from "./components/Avisos";
import Faltas from "./components/Faltas";
import Horario from "./components/Horario";
import Notas from "./components/Notas";
import Calendario from "./components/Calendario";

function App() {
  const [aluno, setAluno] = useState({});
  const [boletim, setBoletim] = useState([]);
  const [notas, setNotas] = useState([]);
  const [frequencia, setFrequencia] = useState([]);
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/dashboard/1")
      .then(res => res.json())
      .then(data => {
        setAluno({ nome: data.aluno });
        setBoletim(data.boletim);
        setNotas(data.notas);
        setFrequencia(data.frequencia);
        setTurmas(data.turmas);
      });
  }, []);

  return (
    <>
      <Header titulo="Sistema Escolar" />
      <main>
        <Card titulo="Avisos">
          <Avisos avisos={[{ tipo: "importante", texto: "Reunião às 15h" }]} />
        </Card>
        <Card titulo="Faltas">
          <Faltas faltas={frequencia} />
        </Card>
        <Card titulo="Horário">
          <Horario turmas={turmas} />
        </Card>
        <Card titulo="Notas">
          <Notas notas={notas} />
        </Card>
        <Card titulo="Calendário">
          <Calendario />
        </Card>
      </main>
      <NavBar />
    </>
  );
}

export default App;
