import React from "react";
import { BsListCheck } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineGlobal } from "react-icons/ai";

import { Section } from "../Section";
import { HomeLogo } from "../Section/Logos/HomeLogo";
import { LogoVerdeCortada } from "../Section/Logos/LogoVerdeCortada";
import {
  StyledMain,
  StyledMainActingCard,
  StyledMainCard,
  StyledMainCardContent,
  StyledMainCardContentLogo,
  StyledMainCardHeader,
  StyledMainColumn,
  StyledMainRow,
  StyledMainText,
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
            <>
              <label>
                Dr. <strong>Osnildo Oliveira Reis</strong> é advogado, fundador
                do escritório digital{" "}
                <strong>Osnildo Reis Advocacia Especializada</strong>, inscrito
                na OAB/SP através do nº 475.409
              </label>
              <p>
                Dr. Osnildo Reis é advogado especialista em Direito do Trabalho
                e Processo do Trabalho, com atuação profissional no escritório
                digital <strong>OSNILDO REIS ADVOCACIA ESPECIALIZADA</strong>,
                também advogado parceiro de escritórios de advocacia localizados
                no Estado de São Paulo, Acre e Rondônia.
              </p>
              <p>
                Em Cosmópolis/SP, atua como advogado parceiro do renomado
                escritório de advocacia Ateliê Jurídico do experiente advogado
                Dr. Edilson Elias Leite. Já no Acre, atua como advogado parceiro
                do escritório de advocacia Victor Andrade na cidade de Cruzeiro
                do Sul/AC. Por fim, em Rondônia, atua com parceira com o Dr.
                Luiz Fernando Torrejaes Romero, na cidade de Jaru/RO.
              </p>
              <p>
                Dr. Osnildo, em 2022 fundou o renomado escritório digital{" "}
                <strong>OSNILDO REIS ADVOCACIA ESPECIALIZADA</strong>, para
                melhor atender os seus clientes, dando-lhes o conforto
                necessário para um atendimento de muita qualidade e humanizado
                onde não existe limites geográficos para sua atuação.
              </p>
            </>
          </StyledMainCardContent>
          <StyledMainCardContentLogo>
            <LogoVerdeCortada size="20rem" />
          </StyledMainCardContentLogo>
        </StyledMainCard>
      </Section>

      <Section sid="acting" sstyle="normal">
        <StyledMainColumn>
          <StyledMainCardHeader>ATUAÇÃO</StyledMainCardHeader>
          <StyledMainText>
            Nosso grande diferencial é o atendimento acolhedor
          </StyledMainText>
          <StyledMainRow>
            <StyledMainActingCard>
              <BsListCheck size="3rem" />
              <h2>Nossas áreas de atuação</h2>
              <p>
                O Escritório de advocacia é focado no atendimento de questões
                trabalhistas, indenizatórias, consumerista e benefícios
                previdenciários.
              </p>
            </StyledMainActingCard>
            <StyledMainActingCard>
              <TbMessageCircle size="3rem" />
              <h2>Atendimento diferenciado</h2>
              <p>
                Primeiramente, queremos ouvir o seu problema e depois disso,
                poder ajudar você a resolvê-lo.
              </p>
            </StyledMainActingCard>
            <StyledMainActingCard>
              <HiOutlineUserGroup size="3rem" />
              <h2>Atendimento flexível</h2>
              <p>
                A nossa estrutura é desenvolvida para poder te recepcionar da
                melhor maneira possível.
              </p>
            </StyledMainActingCard>
            <StyledMainActingCard>
              <AiOutlineGlobal size="3rem" />
              <h2>Estamos presentes nas redes sociais</h2>
              <p>
                Produzimos conteúdo, tudo a mostrar-lhe “nossa cara” e te dar às
                mãos para ouvir.
              </p>
            </StyledMainActingCard>
          </StyledMainRow>
        </StyledMainColumn>
      </Section>

      <Section sid="profile" sstyle="normal"></Section>

      <Section sid="contact" sstyle="normal"></Section>
    </StyledMain>
  );
}
