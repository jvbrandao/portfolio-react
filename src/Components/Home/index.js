  import React from "react";
import Header from "../Header/index";
import {
  ContainerHome,
  ConteudoHome,
  ContainerImgHome,
  ImagemHome,
  TextosHome,
  TituloHome,
  SubtituloHome,
  ParagrafoHome,
  ImgFundoHome
} from "./styles";

import bonecoOla from "../../img/boneco_globo.png";
import imgFundo from "../../img/bg.jpg";

const Home = () => {
  return (
    <>
    
    <ContainerHome>
      <ImgFundoHome src={imgFundo} alt=" "/>
      <Header />
      <ConteudoHome>
        <TextosHome>
          <TituloHome>Olá, Sou João Brandão</TituloHome>
          <SubtituloHome>Desenvolvedor Python e JS.</SubtituloHome>
          <ParagrafoHome>Bem-vindo ao meu mundo.</ParagrafoHome>
        </TextosHome>
        <ContainerImgHome>
          <ImagemHome src={bonecoOla} alt="bonecoOla" />
        </ContainerImgHome>

      </ConteudoHome>
    </ContainerHome>
    </>
  );
};

export default Home;
