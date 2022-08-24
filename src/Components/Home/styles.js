import styled from "styled-components";

export const ContainerHome = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const ImgFundoHome = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.6;
  z-index: -1;
  object-fit: cover;
`;
export const ConteudoHome = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 4rem;

  }
`;
export const ContainerImgHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 768px) {
    display: none ;
  }
`;
export const ImagemHome = styled.img`
  width: 100%;

`;
export const TextosHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;

  @media (max-width: 768px) {
  align-items: center;

  }
`;
export const TituloHome = styled.h1`
  color: #fff;
  font-size: 3rem;
  /* font-weight: 400 ; */
`;
export const SubtituloHome = styled.h2`
  color: #b069db;
  font-size: 2.5rem;
  font-weight: 400;
`;
export const ParagrafoHome = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: 200;
`;

