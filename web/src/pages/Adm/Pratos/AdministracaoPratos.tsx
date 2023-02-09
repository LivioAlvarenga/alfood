import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from "@mui/icons-material/Image";
import { IconButton, Link, Table, TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import http from "http";
import IPrato from "interfaces/IPrato";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const AdmPratos = () => {
  const [foods, setFoods] = useState<IPrato[]>([]);

  useEffect(() => {
    http
      .get<IPrato[]>("pratos/")
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.log("====>", error);
      });
  }, []);

  const deletePrato = (foodToBeExcluded: IPrato) => {
    http
      .delete(`pratos/${foodToBeExcluded.id}/`)
      .then(() => {
        const foodList = foods.filter((food) => food.id !== foodToBeExcluded.id);
        setFoods([...foodList]);
      })
      .catch((error) => {
        console.log("====>", error);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Imagem</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map((food) => (
            <TableRow key={food.id}>
              <TableCell>{food.nome}</TableCell>
              <TableCell>{food.descricao}</TableCell>
              <TableCell>{food.tag}</TableCell>
              <TableCell>
                <Link href={food.imagem} target="_blank" rel="noreferrer">
                  <IconButton aria-label="image">
                    <ImageIcon color="primary" />
                  </IconButton>
                </Link>
              </TableCell>
              <TableCell>
                <RouterLink to={`/admin/pratos/${food.id}`}>
                  <IconButton aria-label="edit">
                    <EditIcon color="primary" />
                  </IconButton>
                </RouterLink>
              </TableCell>
              <TableCell>
                <IconButton aria-label="delete" onClick={() => deletePrato(food)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdmPratos;
