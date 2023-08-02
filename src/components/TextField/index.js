import './styled.css';

const TextField = (props) => {

    const valueInput = (evento) => {
        // console.log(evento.target.value)
        props.inputValue(evento.target.value);
    }

    return (
        <div className="container-text">
            <label>{props.label}</label>
            <input value={props.valor} onChange={valueInput} required={props.obrigatorio} type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default TextField;