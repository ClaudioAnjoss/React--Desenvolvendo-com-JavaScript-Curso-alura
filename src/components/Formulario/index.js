import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './styled.css';

const Formulario = () => {

    const listaTimes = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovaçao e Gestão'
    ];

    const salvar = (evento) => {
        evento.preventDefault();
        console.log('Submit foi feito')
    }

    return (
        <form onSubmit={salvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
            <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
            <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
            <DropdownList obrigatorio={true} label="Times" itens={listaTimes} />
            <Button>
                Criar card
            </Button>
        </form>
    )
}

export default Formulario;