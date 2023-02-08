import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import http from "http";
import IRestaurante from "interfaces/IRestaurante";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FormRestaurantes = () => {
  const parameters = useParams();
  const [nomeRestaurante, setNomeRestaurante] = useState("");

  useEffect(() => {
    if (parameters.id) {
      http
        .get<IRestaurante>(`restaurantes/${parameters.id}/`)
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
      http
        .put(`restaurantes/${parameters.id}/`, {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante atualizado com sucesso!");
        })
        .catch((error) => {
          console.log("====>", error);
        });
    } else {
      http
        .post("restaurantes/", {
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
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}
    >
      <Typography component="h1" variant="h6">
        Formulário de Restaurantes
      </Typography>
      <Box component="form" onSubmit={aoSubmeterForm}>
        <TextField
          value={nomeRestaurante}
          onChange={(e) => setNomeRestaurante(e.target.value)}
          id="standard-basic"
          label="Nome do restaurante"
          variant="standard"
          fullWidth
          required
        />
        <Button sx={{ marginTop: "10px" }} type="submit" variant="outlined" fullWidth>
          Salvar
        </Button>
      </Box>
    </Box>
  );
};

export default FormRestaurantes;
