import { useState, useEffect } from 'react';
import IRestaurante from '../../../../interfaces/IRestaurante';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import axios from 'axios';
const AdmnistracaoRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
    useEffect(() => {
        axios.get<IRestaurante[]>(`http://0.0.0.0:8000/api/v2/restaurantes/`)
            .then(resposta => setRestaurantes(resposta.data))

    }, [])
    return (
        // Retornar a lista de restaurante

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurant =>
                        <TableRow key={restaurant.id}>
                            <TableCell>
                                {restaurant.nome}
                            </TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>

        </TableContainer>

    );
}

export default AdmnistracaoRestaurantes