import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const FormRestaurantes = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");

  const aoSubmeterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
