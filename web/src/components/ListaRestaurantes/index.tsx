import DoneIcon from "@mui/icons-material/Done";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios, { AxiosRequestConfig } from "axios";
import { IPaginacao } from "interfaces/IPaginacao";
import IParametrosBusca from "interfaces/IParametrosBusca";
import IRestaurante from "interfaces/IRestaurante";
import { useEffect, useState } from "react";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";

const ListaRestaurantes = () => {
  const [restaurants, setRestaurants] = useState<IRestaurante[]>([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const loadingDados = (url: string, options: AxiosRequestConfig = {}) => {
    axios
      .get<IPaginacao<IRestaurante>>(url, options)
      .then((response) => {
        setRestaurants(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const goSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      params: {} as IParametrosBusca,
    };
    if (search) {
      options.params.search = search;
    }
    if (sort) {
      options.params.ordering = sort;
    }
    loadingDados("http://localhost:8000/api/v1/restaurantes/", options);
  };

  useEffect(() => {
    loadingDados("http://localhost:8000/api/v1/restaurantes/");
  }, []);

  return (
    <section className={style.ListaRestaurantes}>
      <div className={style.BoxTitle}>
        <h1>
          Os restaurantes mais <em>bacanas</em>!
        </h1>

        <form className={style.Form} onSubmit={goSearch}>
          <div className={style.IconForm}>
            <SearchIcon
              sx={{ position: "absolute", color: "gray", left: -30, bottom: 2 }}
            />
            <TextField
              className={style.Input}
              type="text"
              variant="standard"
              label="Nome do Restaurante"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className={style.SelectBnt}>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 200, marginLeft: "20px" }}
            >
              <InputLabel id="demo-select-small">Ordenação</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                label="Ordenação"
              >
                <MenuItem value="">Padrão</MenuItem>
                <MenuItem value="id">Por ID</MenuItem>
                <MenuItem value="nome">Por Nome</MenuItem>
              </Select>
            </FormControl>
            <IconButton aria-label="submit" type="submit">
              <DoneIcon />
            </IconButton>
          </div>
        </form>
      </div>

      {restaurants?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      {
        <button
          className={style.ViewMoreBnt}
          onClick={() => loadingDados(previousPage)}
          disabled={!previousPage}
        >
          Página Anterior
        </button>
      }
      {
        <button
          className={style.ViewMoreBnt}
          onClick={() => loadingDados(nextPage)}
          disabled={!nextPage}
        >
          Próxima página
        </button>
      }
    </section>
  );
};

export default ListaRestaurantes;
