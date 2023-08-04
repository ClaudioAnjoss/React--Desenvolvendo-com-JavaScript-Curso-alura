import './styled.css';

const CardColaborador = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src='https://github.com/ClaudioAnjoss.png' />
            </div>
            <div className='rodape'>
                <h4>Claudio Anjos</h4>
                <h5>Instrutor</h5>
            </div>
        </div>
    )
}

export default CardColaborador;