import './styled.css';

const Button = (props) => {
    return(
        <button className='botao'>{props.children}</button>
    )
}

export default Button;