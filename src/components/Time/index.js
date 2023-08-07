import CardColaborador from "../CardColaborador";
import "./styled.css";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  //   console.log(colaboradores)
  return (
    colaboradores.length > 0 && <div
      className="container-card"
      style={{ background: corSecundaria }}
      key={nome}
    >
      <h2>{nome}</h2>
      <span style={{ background: corPrimaria }} />
      <div className="container-scroll">
        {colaboradores.map((data) => (
          <CardColaborador
            key={data.nome}
            nome={data.nome}
            cargo={data.cargo}
            time={data.time}
            imagem={data.imagem}
            background={corPrimaria}
          />
        ))}
      </div>
    </div>
  );
};

export default Time;
