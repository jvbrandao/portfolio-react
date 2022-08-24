import styled from "styled-components";

export const ContainerContato = styled.div`
  min-height: 90vh;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 2rem ;

`;
export const ContainerInformacaoContato = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const ContainerFormulario = styled.div`
  width:50% ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  padding: 4rem 0;
  background-color: #25124a ;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    width: 90% ;
    padding:0 0 4rem 0;
    margin: 0;

  }
`
export const TituloFormulario = styled.h1`
  color: #fff;
  margin: 2rem 0;
  text-align: center;
`

export const FormEnvio = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100% ;


`

export const Input = styled.input`
  width: 50% ;
  margin-bottom: 1rem;
  height: 2.5rem;
  padding: 0.5rem;
  color: #fff;
  border: 1px solid white;
  border-radius: 0.5rem;
  background-color:#212121 ;

  @media (max-width: 768px) {
    width: 80% ;
  }

`

export const InputMensagem = styled.input`
  width: 50% ;
  margin-bottom: 1rem;
  height: 6rem;
  padding: 0.5rem;
  color: #fff;
  border: 1px solid white;
  border-radius: 0.5rem;
  background-color:#212121 ;
  
  @media (max-width: 768px) {
    width: 80% ;
  }
`

export const ContainerImagemFormulario = styled.div`
  width: 50% ;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }

`
export const ImgFormulario = styled.img`
  width: 70%;
  
`

export const BotaoFormulario = styled.button`
  background-color: #b069db ;
  padding: 1rem;
  border: none;
  border-radius:0.8rem ;
  font-size: 1.5rem ;
  font-weight: bold;
  color:#25124a;
  transition: all 0.25s ease-out ;


  &:hover{
    background-color: #53ed58;
  }
`