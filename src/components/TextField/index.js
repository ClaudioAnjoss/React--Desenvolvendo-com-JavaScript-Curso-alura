import './styled.css';

const TextField = (props) => {
    return (
        <div className="container-text">
            <label>{props.label}</label>
            <input required={props.obrigatorio} type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default TextField;