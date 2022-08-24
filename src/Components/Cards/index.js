import React from "react";
import { ContainerCards, Nome, Descricao, Linguagem } from "./styles";
import ContainerBotao from "../Botao/index";

const Cards = ({ nome, descricao, linguagem, link }) => {
  return (
    <ContainerCards>
      <Nome>{nome}</Nome>
      <Descricao>{descricao}</Descricao>
      <Linguagem>{linguagem}</Linguagem>
      <ContainerBotao link={link} target={true} texto={"Acessar repositório"} />
    </ContainerCards>
  );
};

export default Cards;
