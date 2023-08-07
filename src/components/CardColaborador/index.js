import './styled.css';

const CardColaborador = ({nome, cargo, imagem, time, background}) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{background: background}}>
                <img src={imagem} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <p>{cargo}</p>
                <h5>{time}</h5>
            </div>
        </div>
    )
}

export default CardColaborador;