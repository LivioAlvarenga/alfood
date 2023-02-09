import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import http from "http";
import IRestaurante from "interfaces/IRestaurante";
import ITag from "interfaces/ITag";
import { useEffect, useState } from "react";

const FormPrato = () => {
  const [foodName, setFoodName] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodTag, setFoodTag] = useState("");
  const [foodTags, setFoodTags] = useState<ITag[]>([]);
  const [restaurant, setRestaurant] = useState("");
  const [restaurants, setRestaurants] = useState<IRestaurante[]>([]);
  const [foodImg, setFoodImg] = useState<File | null>(null);
  const [foodImgName, setFoodImgName] = useState("");

  useEffect(() => {
    http
      .get<{ tags: ITag[] }>("tags/")
      .then((response) => {
        setFoodTags(response.data.tags);
      })
      .catch((error) => {
        console.log("====>", error);
      });

    http
      .get<IRestaurante[]>("restaurantes/")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.log("====>", error);
      });
  }, []);

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFoodImg(event.target.files[0]);
      setFoodImgName(event.target.files[0].name);
    } else {
      setFoodImg(null);
    }
  };

  const aoSubmeterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        flexGrow: 1,
      }}
    >
      <Typography component="h1" variant="h6">
        Formulário de Pratos
      </Typography>
      <Box
        component="form"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
        onSubmit={aoSubmeterForm}
      >
        <TextField
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          id="standard-basic"
          label="Nome do prato"
          variant="standard"
          fullWidth
          required
        />

        <TextField
          value={foodDescription}
          onChange={(e) => setFoodDescription(e.target.value)}
          id="standard-basic"
          label="Descrição do prato"
          variant="standard"
          fullWidth
          required
        />

        <FormControl fullWidth sx={{ marginTop: "15px" }}>
          <InputLabel id="select-tag">Tag do Prato</InputLabel>
          <Select
            labelId="select-tag"
            id="select-tag"
            value={foodTag}
            label="Tag do Prato"
            onChange={(event) => setFoodTag(event.target.value)}
          >
            {foodTags.map((tag) => (
              <MenuItem key={tag.id} value={tag.id}>
                {tag.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginTop: "15px" }}>
          <InputLabel id="select-restaurant">Escolha o Restaurante</InputLabel>
          <Select
            labelId="select-restaurant"
            id="select-restaurant"
            value={restaurant}
            label="Escolha o Restaurante"
            onChange={(event) => setRestaurant(event.target.value)}
          >
            {restaurants.map((restaurants) => (
              <MenuItem key={restaurants.id} value={restaurants.id}>
                {restaurants.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <IconButton color="primary" aria-label="upload picture" component="label">
          <input
            id="select-restaurant"
            hidden
            accept="image/*"
            type="file"
            onChange={selectImage}
          />
          <PhotoCamera />
          <InputLabel id="select-restaurant" sx={{ marginLeft: "10px" }}>
            {foodImgName}
          </InputLabel>
        </IconButton>

        <Button sx={{ marginTop: "15px" }} type="submit" variant="outlined" fullWidth>
          Salvar
        </Button>
      </Box>
    </Box>
  );
};

export default FormPrato;
