import React from "react";
import { Section } from "../Section";
import { HomeLogo } from "../Section/Logos/HomeLogo";
import { LogoVerdeCortada } from "../Section/Logos/LogoVerdeCortada";
import {
  StyledMain,
  StyledMainCard,
  StyledMainCardContent,
  StyledMainCardContentLogo,
  StyledMainCardHeader,
} from "./styles";

export function Main() {
  return (
    <StyledMain>
      <Section sid="backgroundImageFixed" sstyle="full">
        <HomeLogo />
      </Section>

      <div id="home" style={{ height: "100vh" }}></div>

      <Section sid="about" sstyle="normal">
        <StyledMainCard>
          <StyledMainCardContent>
            <StyledMainCardHeader>
              <div>SOBRE NÓS</div>
            </StyledMainCardHeader>
            <label>
              Dr. <strong>Osnildo Oliveira Reis</strong> é advogado, fundador do
              escritório digital{" "}
              <strong>Osnildo Reis Advocacia Especializada</strong>, inscrito na
              OAB/SP através do nº 475.409
            </label>
            <p>
              Dr. Osnildo Reis é advogado especialista em Direito do Trabalho e
              Processo do Trabalho, com atuação profissional no escritório
              digital <strong>OSNILDO REIS ADVOCACIA ESPECIALIZADA</strong>,
              também advogado parceiro de escritórios de advocacia localizados
              no Estado de São Paulo, Acre e Rondônia.
            </p>
            <p>
              Em Cosmópolis/SP, atua como advogado parceiro do renomado
              escritório de advocacia Ateliê Jurídico do experiente advogado Dr.
              Edilson Elias Leite. Já no Acre, atua como advogado parceiro do
              escritório de advocacia Victor Andrade na cidade de Cruzeiro do
              Sul/AC. Por fim, em Rondônia, atua com parceira com o Dr. Luiz
              Fernando Torrejaes Romero, na cidade de Jaru/RO.
            </p>
            <p>
              Dr. Osnildo, em 2022 fundou o renomado escritório digital{" "}
              <strong>OSNILDO REIS ADVOCACIA ESPECIALIZADA</strong>, para melhor
              atender os seus clientes, dando-lhes o conforto necessário para um
              atendimento de muita qualidade e humanizado onde não existe
              limites geográficos para sua atuação.
            </p>
          </StyledMainCardContent>
          <StyledMainCardContentLogo>
            <LogoVerdeCortada size="20rem" />
          </StyledMainCardContentLogo>
        </StyledMainCard>
      </Section>
      <Section sid="acting" sstyle="normal"></Section>
      <Section sid="profile" sstyle="normal"></Section>
      <Section sid="contact" sstyle="normal"></Section>
    </StyledMain>
  );
}
