import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20rem;
  width: 50%;
  border-radius: 0.8rem;
  box-shadow:  0 0 1.5rem black;
  background-color: #25124a;
  padding: 1.5rem;


  &:hover {
    box-shadow:  0 0 4rem black;
  }

  @media (max-width: 768px) {
    width: 100% ;
  }
`;
export const Nome = styled.h1`
color: #fff;
font-weight: 400;
text-align: center;


`;
export const Descricao = styled.h2`
color: #fff;
font-weight: 200;
text-align: center;

`;
export const Linguagem = styled.h2`
color: #fff;
font-weight: 200;
text-align: center;


`;
