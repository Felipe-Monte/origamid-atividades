import React from 'react';
import { Container } from './styles';
import Buttons from '../../components/Buttons';
import CardProduct from '../../components/CardProduct';

const Home = () => {
  return (
    <Container>
      <header>
        <Buttons />
      </header>

      <main>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </main>
    </Container>
  );
};

export default Home;
