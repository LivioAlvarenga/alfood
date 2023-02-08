import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Table, TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import http from "http";
import IRestaurante from "interfaces/IRestaurante";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdmRestaurantes = () => {
  const [restaurants, setRestaurants] = useState<IRestaurante[]>([]);

  useEffect(() => {
    http
      .get<IRestaurante[]>("restaurantes/")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.log("====>", error);
      });
  }, []);

  const deleteRestaurant = (restaurantToBeExcluded: IRestaurante) => {
    http
      .delete(`restaurantes/${restaurantToBeExcluded.id}/`)
      .then(() => {
        const restaurantList = restaurants.filter(
          (restaurant) => restaurant.id !== restaurantToBeExcluded.id
        );
        setRestaurants([...restaurantList]);
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
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurants.map((restaurant) => (
            <TableRow key={restaurant.id}>
              <TableCell>{restaurant.nome}</TableCell>
              <TableCell>
                <Link to={`/admin/restaurantes/${restaurant.id}`}>
                  <IconButton aria-label="edit">
                    <EditIcon color="primary" />
                  </IconButton>
                </Link>
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteRestaurant(restaurant)}
                >
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

export default AdmRestaurantes;
