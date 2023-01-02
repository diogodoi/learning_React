import { useState, useEffect } from 'react';
import IRestaurante from '../../../../interfaces/IRestaurante';
import { Paper, Button,Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AdmnistracaoRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  useEffect(() => {
    axios.get<IRestaurante[]>(`http://0.0.0.0:8000/api/v2/restaurantes/`)
      .then(resposta => setRestaurantes(resposta.data))

  }, [])

  const excluirRest = (restExcluido:IRestaurante) =>{
    axios.delete(`http://0.0.0.0:8000/api/v2/restaurantes/${restExcluido.id}/`)
    .then(()=>{
      const listaRest = restaurantes.filter(rest => rest.id !== restExcluido.id)
      setRestaurantes([...listaRest])
    })
  }
  return (
    // Retornar a lista de restaurante

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nome
            </TableCell>
            <TableCell>
              Editar
            </TableCell>
            <TableCell>
              Excluir
            </TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {restaurantes.map(restaurant =>
            <TableRow key={restaurant.id}>
              <TableCell>
                {restaurant.nome}
              </TableCell>
              <TableCell>
                [<Link to={`/admin/restaurantes/${restaurant.id}`}>editar</Link>]
              </TableCell>
              <TableCell >
                <Button
                variant='outlined'
                color="error"
                onClick={()=> excluirRest(restaurant)}
                >Excluir</Button>
              </TableCell>
            </TableRow>
          )}

        </TableBody>
      </Table>

    </TableContainer>

  );
}

export default AdmnistracaoRestaurantes