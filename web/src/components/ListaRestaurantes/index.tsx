import axios from "axios";
import { IPaginacao } from "interfaces/IPaginacao";
import IRestaurante from "interfaces/IRestaurante";
import { useEffect, useState } from "react";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";

const ListaRestaurantes = () => {
  const [restaurants, setRestaurants] = useState<IRestaurante[]>([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  const loadingDados = (url: string) => {
    axios
      .get<IPaginacao<IRestaurante>>(url)
      .then((resposta) => {
        setRestaurants(resposta.data.results);
        setNextPage(resposta.data.next);
        setPreviousPage(resposta.data.previous);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    loadingDados("http://localhost:8000/api/v1/restaurantes/");
  }, []);

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
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
