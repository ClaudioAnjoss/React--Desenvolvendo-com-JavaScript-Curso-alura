import CardColaborador from "../CardColaborador";
import "./styled.css";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
//   console.log(colaboradores)
  return (
    <div
      className="container-card"
      style={{ background: corSecundaria }}
      key={nome}
    >
      <h2>{nome}</h2>
      <span style={{ background: corPrimaria }} />
        {colaboradores.map(data => <CardColaborador key={data.nome} nome={data.nome} cargo={data.time} imagem={data.imagem} />)}
    </div>
  );
};

export default Time;
