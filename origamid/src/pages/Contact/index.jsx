import React from 'react';
import { Container, Section, ContainerImg, ContainerText } from './styles';
import Buttons from '../../components/Buttons';

const Contact = () => {
  return (
    <Container>
      <header>
        <Buttons />
      </header>

      <Section>
        <ContainerImg>
          <img src="/contato.jpg" alt="imagem de contato" />
        </ContainerImg>

        <ContainerText>
          <h2>Entre em contato</h2>
          <p>felipe@email.com</p>
          <p>99999-9999</p>
          <p>Rua ali perto</p>
        </ContainerText>
      </Section>
    </Container>
  );
};

export default Contact;
