import RestaurantIcon from "@mui/icons-material/RestaurantMenu";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
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

  const loadingDados = (url: string, options: AxiosRequestConfig = {}) => {
    axios
      .get<IPaginacao<IRestaurante>>(url, options)
      .then((resposta) => {
        setRestaurants(resposta.data.results);
        setNextPage(resposta.data.next);
        setPreviousPage(resposta.data.previous);
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
    loadingDados("http://localhost:8000/api/v1/restaurantes/", options);
  };

  useEffect(() => {
    loadingDados("http://localhost:8000/api/v1/restaurantes/");
  }, []);

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>

      <form onSubmit={goSearch}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Nome do Restaurant</InputLabel>
          <Input
            id="input-with-icon-adornment"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <RestaurantIcon fontSize="small" />
              </InputAdornment>
            }
          />
        </FormControl>
      </form>

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
