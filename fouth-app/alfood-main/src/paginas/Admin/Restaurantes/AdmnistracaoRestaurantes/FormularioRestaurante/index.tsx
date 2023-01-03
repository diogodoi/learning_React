import { Paper, TextField, Button, Typography, Box, AppBar, Container, Toolbar, Link } from '@mui/material';
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

    <Box>
      <Container maxWidth="lg" sx={{ mt: 1 }}>
        <Paper sx={{ p: 2 }}>

          {/* Conteudo da pagina */}
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexGrow: 1
          }}>
            <Typography component="h1" variant="h6">Formulário de Restaurantes</Typography>
            <Box
              sx={{ width: '100%' }}
              component="form"
              onSubmit={aoSubmeterForm}>
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
        </Paper>
      </Container>
    </Box>



  );
}

export default FormularioRestaurante