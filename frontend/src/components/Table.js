import React, { useEffect, useState} from "react";
import {Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Paper, Button, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function BasicTable() {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/foods')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Eroare la preluare de date.')
                }
                return response.json()
            })
            .then(data => {
                setFoods(data.foods);
            })
            .catch(error => {
                console.log(`Error: ${error}`)
            })
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{textAlign: 'center'}}>Brand</TableCell>
                        <TableCell sx={{textAlign: 'center'}}>Name</TableCell>
                        <TableCell sx={{textAlign: 'center'}}>Category</TableCell>
                        <TableCell sx={{textAlign: 'center'}}>Date added</TableCell>
                        <TableCell sx={{textAlign: 'center'}}>Date expiration</TableCell>
                        <TableCell sx={{textAlign: 'center'}}>Alergeni</TableCell>
                      <TableCell sx={{textAlign: 'center'}}>Comenzi</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {foods.map((food) => (
                        <TableRow key={food.id}>
                            <TableCell sx={{textAlign: 'center'}}>{food.brand}</TableCell>
                            <TableCell sx={{textAlign: 'center'}}>{food.name}</TableCell>
                            <TableCell sx={{textAlign: 'center'}}>{food.category}</TableCell>
                            <TableCell sx={{textAlign: 'center'}}>{new Date(food.date_added).toLocaleDateString()}</TableCell>
                            <TableCell sx={{textAlign: 'center'}}>{new Date(food.date_expiration).toLocaleDateString()}</TableCell>
                            <TableCell sx={{textAlign: 'center'}}>{food.allergens}</TableCell>
                            <TableCell sx={{textAlign: 'center'}}>
                                <IconButton aria-label="delete">
                                    <EditIcon />
                                </IconButton>

                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;
