import React from "react";
import {
  ContainerHeader,
  ContainerTitulos,
  Titulos,
  ContainerLogo,
  Imagem,
  ContainerResponsivo
} from "./styles";
import { HashLink as Link } from "react-router-hash-link";

import {FaBars} from 'react-icons/fa'

import logo from "../../img/logo_branca.png";

const Header = () => {
  const hamburguer = () => {
    const idHamburger = document.querySelector("#infos-hamburger")
        if(idHamburger.style.display !== 'flex'){

            idHamburger.style.display = "flex"
        }else{
            idHamburger.style.display = "none"

        }
  }

  return (
    <ContainerHeader id="home">
      <ContainerResponsivo>
      <ContainerLogo>
        <Imagem src={logo} alt="logo" />
      </ContainerLogo>
        <FaBars onClick={hamburguer}/>
      </ContainerResponsivo>
      <ContainerTitulos id="infos-hamburger">
        <Link smooth to="#home">
          <Titulos>Home</Titulos>
        </Link>
        <Link smooth to="#sobre">
          <Titulos>Sobre</Titulos>
        </Link>
        <Link smooth to="#portifolio">
          <Titulos>Portfolio</Titulos>
        </Link>
        <Link smooth to="#contato">
          <Titulos>Contato</Titulos>
        </Link>
      </ContainerTitulos>
    </ContainerHeader>
  );
};

export default Header;
