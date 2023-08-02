import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const times = [
    {
      nome: "Progamação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: 'Front End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corSecundaria: '#FFEEDF'
    }
  ];

  console.log(times)
  return (
    <div className="container">
      <Banner />
      <Formulario formData={(valor) => setColaboradores(valor)} />
      <div className="container-organizacao">
        <h2>Minha Organização:</h2>
        <span className="borderBottom" />
        <button>
          <img src="./imagens/button-add.png" />
        </button>
      </div>

      {times.map(e => {
        return(
          <div className="container-card" style={{background: e.corSecundaria}} key={e.nome}>
            <h2>{e.nome}</h2>
            <span style={{background: e.corPrimaria}} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
