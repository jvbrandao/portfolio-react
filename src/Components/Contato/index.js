import React, { useState } from "react";
import axios from "axios";

import {
  ContainerContato,
  ContainerFormulario,
  TituloFormulario,
  FormEnvio,
  Input,
  InputMensagem,
  ContainerImagemFormulario,
  ContainerInformacaoContato,
  ImgFormulario,
  BotaoFormulario,
} from "./styles";
import Titulo from "../Titulos/index";

import BonecoContato from "../../img/contato.png";

const Contato = () => {
  const [sent, setSent] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSend = async () => {
    setSent(true);
    console.log(nome,
      email,
      assunto,
      mensagem)
    try {
      await axios.post("http://localhost:5000/send_mail", {
        nome,
        email,
        assunto,
        mensagem
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerContato>
      <Titulo titulo={"Entre em Contato."} />
      <ContainerInformacaoContato>
        <ContainerFormulario>
          <TituloFormulario>Deixe uma mensagem.</TituloFormulario>
          <FormEnvio onSubmit={handleSend}>
            <Input
              type="text"
              placeholder="Digite seu nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="assunto"
              placeholder="Digite o assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
            />
            <InputMensagem
              type="mensagem"
              placeholder="Digite sua mensagem"
              required
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
            <BotaoFormulario type="submit">Enviar mensagem!!</BotaoFormulario>
          </FormEnvio>
        </ContainerFormulario>

        <ContainerImagemFormulario>
          <ImgFormulario src={BonecoContato} alt="Boneco Contato" />
        </ContainerImagemFormulario>
      </ContainerInformacaoContato>
    </ContainerContato>
  );
};

export default Contato;
