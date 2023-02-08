import { Button, TextField } from "@mui/material";
import axios from "axios";
import IRestaurante from "interfaces/IRestaurante";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FormRestaurantes = () => {
  const parameters = useParams();
  const [nomeRestaurante, setNomeRestaurante] = useState("");

  useEffect(() => {
    if (parameters.id) {
      axios
        .get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parameters.id}/`)
        .then((response) => {
          setNomeRestaurante(response.data.nome);
        })
        .catch((error) => {
          console.log("====>", error);
        });
    }
  }, [parameters]);

  const aoSubmeterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (parameters.id) {
      axios
        .put(`http://localhost:8000/api/v2/restaurantes/${parameters.id}/`, {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante atualizado com sucesso!");
        })
        .catch((error) => {
          console.log("====>", error);
        });
    } else {
      axios
        .post("http://localhost:8000/api/v2/restaurantes/", {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante cadastrado com sucesso!");
        })
        .catch((error) => {
          console.log("====>", error);
        });
    }
  };

  return (
    <form onSubmit={aoSubmeterForm}>
      <TextField
        value={nomeRestaurante}
        onChange={(e) => setNomeRestaurante(e.target.value)}
        id="standard-basic"
        label="Nome do restaurante"
        variant="standard"
      />
      <Button type="submit" variant="outlined">
        Salvar
      </Button>
    </form>
  );
};

export default FormRestaurantes;
