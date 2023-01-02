import { TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IRestaurante from '../../../../../interfaces/IRestaurante';

const FormularioRestaurante = () => {

  const param = useParams();

  useEffect(() => {
    if (param.id) {
      axios.get<IRestaurante>(`http://0.0.0.0:8000/api/v2/restaurantes/${param.id}/`)
        .then(resposta => setNomeRest(resposta.data.nome))
    }
  }, [param])

  const [nomeRest, setNomeRest] = useState('');
  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    if(param.id) {
      axios.put(`http://0.0.0.0:8000/api/v2/restaurantes/${param.id}/`, {
        nome: nomeRest,
      })
        .then(() => {
          alert('Restaurante atualizado com sucesso !')
        })

    } else {
      axios.post('http://0.0.0.0:8000/api/v2/restaurantes/', {
        nome: nomeRest,
      })
        .then(() => {
          alert('Restaurante cadastrado com sucesso !')
        })
      // console.log('preciso enviar dados para api')
      // console.log('nomeRest')
    }
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