import { BsInstagram, BsListCheck, BsTelephone } from "react-icons/bs";
import { TbMail, TbMessageCircle } from "react-icons/tb";
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
  StyledMainContact,
  StyledMainContactCard,
  StyledMainContactCardContent,
  StyledMainProfileCard,
  StyledMainProfileCardContent,
  StyledMainProfileCardLogo,
  StyledMainRow,
  StyledMainText,
} from "./styles";
import { useEffect } from "react";
import { useState } from "react";

export function Main() {
  const perfilImage = require("../../assets/perfil.png");

  const [targets, setTargets] = useState<any>([]);
  const animationClass = "animate";

  useEffect(() => {
    animeScroll();
    setTargets(document.querySelectorAll("[data-anime]"));
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function animeScroll() {   
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    targets.forEach((target:any) => {
      if (windowTop > target.offsetTop) {
        target.classList.add(animationClass);
      } else {
        target.classList.remove(animationClass);
      }
    });
  }

  if (targets.length) {
    window.addEventListener("scroll", animeScroll);
  }


  return (
    <StyledMain>
      <Section sid="backgroundImageFixed" sstyle="full">
        <HomeLogo />
      </Section>

      <div id="home" style={{ height: "100vh" }}></div>

      <Section sid="about" sstyle="normal">
        <StyledMainCard>
          <StyledMainCardContent data-anime="left">
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
          <StyledMainCardContentLogo data-anime="top">
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
          <StyledMainRow data-anime="bot" >
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

      <Section sid="profile" sstyle="normal">
        <StyledMainColumn>
          <StyledMainCardHeader>ADVOGADO</StyledMainCardHeader>
          <StyledMainText>Dr. Osnildo Oliveira Reis</StyledMainText>
        </StyledMainColumn>
        <StyledMainCard data-anime="left">
          <StyledMainProfileCard>
            <StyledMainRow>
              <StyledMainProfileCardContent>
                <label>
                  <strong>Inscrito na OAB/SP através do nº 475.409</strong>
                </label>
                <StyledMainColumn>
                  <p>
                    Dr. Osnildo é especialista em Direito do Trabalho e Processo
                    do Trabalho. Graduado pelo UNASP – Centro Universitário
                    Adventista de São Paulo campus Engenheiro Coelho no ano de
                    2020.
                  </p>
                  <p>
                    Além disso, é pós-graduando em Gestão de Pessoas Por
                    Competência pelo Centro Universitário Adventista de Ensino.
                  </p>
                  <p>
                    Finalmente, Dr. Osnildo Reis atua de forma bastante
                    especializada em ações trabalhistas e indenizatórias, tendo
                    sido contratado por clientes de todo Brasil através de sua
                    advocacia especializada.
                  </p>
                </StyledMainColumn>
              </StyledMainProfileCardContent>
              <StyledMainProfileCardLogo>
                <img src={perfilImage} alt="" style={{ height: "100%" }} />
              </StyledMainProfileCardLogo>
            </StyledMainRow>
          </StyledMainProfileCard>
        </StyledMainCard>
      </Section>

      <Section sid="contact" sstyle="normal">
        <StyledMainColumn>
          <StyledMainCardHeader>CONTATO</StyledMainCardHeader>
        </StyledMainColumn>
        <StyledMainContact data-anime="bot">
          <a href="tel:+5519997021486">
            <StyledMainContactCard>
              <StyledMainContactCardContent>
                <BsTelephone size={50} />
                <label htmlFor="">TELEFONE</label>
                <span>(19) 99702-1486</span>
              </StyledMainContactCardContent>
            </StyledMainContactCard>
          </a>
          <a href="mailto:advogadoosnildo.reis@gmail.com">
            <StyledMainContactCard>
              <StyledMainContactCardContent>
                <TbMail size={50} />
                <label htmlFor="">EMAIL</label>
                <span>advogadoosnildo.reis@gmail.com</span>
              </StyledMainContactCardContent>
            </StyledMainContactCard>
          </a>
          <a
            href="https://www.instagram.com/osnildo.reisadvogado/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledMainContactCard>
              <StyledMainContactCardContent>
                <BsInstagram size={50} />
                {/* <AiOutlineGlobal size={50} /> */}
                <label htmlFor="">Instagram</label>
                <span>advogadoosnildo.reis</span>
              </StyledMainContactCardContent>
            </StyledMainContactCard>
          </a>
        </StyledMainContact>
      </Section>
    </StyledMain>
  );
}
