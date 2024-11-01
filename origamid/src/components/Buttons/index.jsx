import React from 'react';
import { Container } from './styles';

const Buttons = () => {
  function handleClick(productName) {
    console.log(`CLicou em ${productName}`);
  }

  return (
    <Container>
      <button onClick={() => handleClick('Produtos')}>Produtos</button>
      <button onClick={() => handleClick('Contato')}>Contato</button>
    </Container>
  );
};

export default Buttons;
