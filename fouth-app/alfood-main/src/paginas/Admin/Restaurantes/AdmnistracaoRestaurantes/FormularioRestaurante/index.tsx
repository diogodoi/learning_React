import { TextField, Button, Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import IRestaurante from '../../../../../interfaces/IRestaurante';
import http from '../../../../../HTTP';


const FormularioRestaurante = () => {

  const param = useParams();

  useEffect(() => {
    if (param.id) {
      http.get<IRestaurante>(`restaurantes/${param.id}/`)
        .then(resposta => setNomeRest(resposta.data.nome))
    }
  }, [param])

  const [nomeRest, setNomeRest] = useState('');
  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    if (param.id) {
      http.put(`restaurantes/${param.id}/`, {
        nome: nomeRest,
      })
        .then(() => {
          alert('Restaurante atualizado com sucesso !')
        })

    } else {
      http.post('restaurantes/', {
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

    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography component="h1" variant="h6">Formulário de Restaurantes</Typography>
      <Box component="form" onSubmit={aoSubmeterForm}>
        <TextField
          fullWidth
          value={nomeRest}
          onChange={evento => setNomeRest(evento.target.value)}
          id='standar-basic'
          label="Nome do Restaurante"
          variant="standard"
          required
        />
        <Button
          sx={{ marginTop: 1 }}
          fullWidth
          type='submit'
          variant='outlined'
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
}

export default FormularioRestaurante