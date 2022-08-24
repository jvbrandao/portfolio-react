import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  @media (max-width: 768px) {
    /* display:none; */
    flex-direction: column;
  }
`;
export const ContainerLogo = styled.div``;
export const Imagem = styled.img`
  max-width: 15rem;
  margin-top: 1rem;
`;
export const ContainerTitulos = styled.div`
  display: flex;
  justify-content: flex-end;

  a{
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display:none;
    flex-direction: column;
  }

`;

export const Titulos = styled.h2`
  padding: 1rem 2rem;
  color: #fff;
  &:hover {
    background-color: #b069db;
    color: #fff;
    cursor: pointer;

    border-radius: 0.5rem;
  }
`;

export const ContainerResponsivo = styled.div`
  font-size: 2rem;
  color: #fff;
  
  @media (min-width: 768px) {
    
    svg{
      display:none;
    }

  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    svg{
      margin: 0 0 0 2rem;
    }
  }
`