import './styled.css';

const DropdownList = (props) => {

    const valueInput = (evento) => {
        props.inputValue(evento.target.value);
    }

    return (
        <div className='campo-select'>
            <label>{props.label}</label>
            <select onChange={valueInput} required={props.obrigatorio}>
                {props.itens.map(item => <option value={item} key={item} >{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList;