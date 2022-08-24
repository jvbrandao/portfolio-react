import React from "react";
import { ContainerBotao, Link } from "./styles";

const Botoes = ({ link, texto, target }) => {
  return (
    <ContainerBotao>
      <Link >
        <a href={link} target={target ? "_blank" : "none"} rel="noopener noreferrer">

        {texto}
        </a>
      </Link>
    </ContainerBotao>
  );
};

export default Botoes;
