import React from 'react';
import { Container } from './styles';
import Buttons from '../../components/Buttons';

const Details = () => {
  return (
    <Container>
      <header>
        <Buttons />
      </header>
      <span>Detalhes do produto</span>
    </Container>
  );
};

export default Details;
