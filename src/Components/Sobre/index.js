import React from "react";
import {
  ContainerSobre,
  ContainerImgSobre,
  ImagemSobre,
  ContainerInformacaoSobre,
  ContainerTextoSobre,
  TextoSobre,
} from "./styles";
import { FaReact } from "react-icons/fa";
import Botao from "../Botao/index";
import Titulo from "../Titulos/index";

import bonecoViagem from "../../img/boneco_viagem.png";

const Sobre = () => {
  return (
    <ContainerSobre id="sobre">
      <Titulo titulo={"Me conheça"} />
      <ContainerInformacaoSobre>
        <ContainerImgSobre>
          <ImagemSobre src={bonecoViagem} alt="boneco viagem" />
        </ContainerImgSobre>
        <ContainerTextoSobre>
          <TextoSobre>
            Me chamo João Victor Brandão, estou cursando Ciência da Computação,
            gosto de resolver problemas e se possível utilizando a tecnologia
            como base.
            <br />
            <br />
            Sou Desenvolvedor Python e JavaScript, atualmente atuando como
            freelancer em desenvolvedor Web. Entusiasta por desenvolvimento com
            foco em Front end usando a biblioteca React.JS {<FaReact />} e
            realizando cursos para aperfeiçoamento.
          </TextoSobre>
          <Botao texto={"Entrar em contato"} />
        </ContainerTextoSobre>
      </ContainerInformacaoSobre>
    </ContainerSobre>
  );
};

export default Sobre;
