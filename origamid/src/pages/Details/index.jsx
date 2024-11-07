import React from 'react';
import { Container, ImgDetails, ContainerText } from './styles';
import Buttons from '../../components/Buttons';

const Details = () => {
  return (
    <Container>
      <header>
        <Buttons />
      </header>

      <main>
        <ImgDetails>foto</ImgDetails>
        <ContainerText>texto</ContainerText>
      </main>
    </Container>
  );
};

export default Details;
