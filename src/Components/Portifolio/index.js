import React from "react";
import { useEffect, useState } from "react";
import Cards from "../Cards/index";
import Carousel from "react-elastic-carousel";
import Titulo from "../Titulos/index";

import { ContainerPortifolio } from "./styles";

const Portifolio = () => {
  const [repositorios, setRepositorios] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/jvbrandao/repos?sort=desc`)
      .then((response) => response.json())
      .then((data) => {
        setRepositorios(data);
      });
  }, []);

  const generateID = () => Math.round(Math.random() * 10000);


  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <ContainerPortifolio id="portifolio">
      <Titulo titulo={"Portfólio"} />
      <Carousel breakpoints={breakpoints} enableAutoPlay={true} showArrows={false}>
        {repositorios.map((repo) => {
          return (
            <Cards
              nome={repo.name}
              descricao={repo.description}
              linguagem={repo.language}
              link={repo.html_url}
              autoPlaySpeed="3000"
              key={generateID()}
            />
          );
        })}
      </Carousel>
    </ContainerPortifolio>
  );
};

export default Portifolio;
