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
      <div className={style.Title}>
        <h1>
          Os restaurantes mais <em>bacanas</em>!
        </h1>

        <form className={style.Form} onSubmit={goSearch}>
          <TextField
            className={style.Input}
            type="text"
            variant="standard"
            label="Nome do Restaurante"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
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
