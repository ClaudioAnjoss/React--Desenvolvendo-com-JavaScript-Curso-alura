import './styled.css';

const Rodape = () => {
    return(
        <div className='container-rodape'>
            <div className='redes-sociais'>
                <img src='./imagens/fb.png' />
                <img src='./imagens/tw.png' />
                <img src='./imagens/ig.png' />
            </div>

            <img className='logo' src='./imagens/logo.png' />

            <h3 className='title-rodape'>Desenvolvido por Claudio Anjos.</h3>
        </div>
    )
}

export default Rodape;