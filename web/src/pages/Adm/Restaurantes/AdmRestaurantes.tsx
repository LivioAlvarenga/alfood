import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Table, TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import IRestaurante from "interfaces/IRestaurante";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdmRestaurantes = () => {
  const [restaurants, setRestaurants] = useState<IRestaurante[]>([]);

  useEffect(() => {
    axios
      .get<IRestaurante[]>("http://localhost:8000/api/v2/restaurantes/")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.log("====>", error);
      });
  }, []);

  const deleteRestaurant = (restaurantToBeExcluded: IRestaurante) => {
    axios
      .delete(`http://localhost:8000/api/v2/restaurantes/${restaurantToBeExcluded.id}/`)
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
                <IconButton aria-label="delete">
                  <DeleteIcon
                    color="error"
                    onClick={() => deleteRestaurant(restaurant)}
                  />
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
