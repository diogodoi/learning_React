import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const FormularioRestaurante = () => {

    const [nomeRest, setNomeRest] = useState('');
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        axios.post('http://0.0.0.0:8000/api/v2/restaurantes/',{
            nome:nomeRest,
        })
        .then(()=>{
            alert('Restaurante cadastrado com sucesso !')
        })
        // console.log('preciso enviar dados para api')
        // console.log('nomeRest')
    }


    return (
        <form onSubmit={aoSubmeterForm}>
            <TextField
                value={nomeRest}
                onChange={evento => setNomeRest(evento.target.value)}
                id='standar-basic' 
                label="Nome do Restaurante" 
                variant="standard" />
            <Button type='submit' variant='outlined'>Outline</Button>
        </form>
    );
}

export default FormularioRestaurante