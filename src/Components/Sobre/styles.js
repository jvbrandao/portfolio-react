import styled from "styled-components";
export const ContainerSobre = styled.div`
  min-height: 80vh;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {

  }
`;


export const ContainerInformacaoSobre = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ContainerImgSobre = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 50%;
  @media (max-width: 768px) {
    display:none;
  }
`;
export const ImagemSobre = styled.img`
  width:50%;
`;
export const ContainerTextoSobre = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-right: 2.5rem;
  @media (max-width: 768px) {
    width: 90% ;
    padding-right: 0;


  }
`;
export const TextoSobre = styled.h2`
  color: #fff;
  font-size: 2rem;
  text-align: justify;
  font-weight: 200;
  line-height: 2.2rem;
  @media (max-width: 768px) {
    margin: auto;

  }
`;
