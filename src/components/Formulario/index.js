import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './styled.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    const listaTimes = ['','Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovaçao e Gestão'];

    const salvar = (evento) => {
        evento.preventDefault();
        console.log('Submit foi feito')
        console.log(nome, cargo, imagem, time);
        props.formData([nome, cargo, imagem, time]);
    }

    return (
        <form onSubmit={salvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <TextField inputValue={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
            <TextField inputValue={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
            <TextField inputValue={valor => setImagem(valor)} label="Imagem" placeholder="Informe o endereço da imagem"/>
            <DropdownList inputValue={valor => setTime(valor)} obrigatorio={true} label="Times" itens={listaTimes} />
            <Button>
                Criar card
            </Button>
        </form>
    )
}

export default Formulario;