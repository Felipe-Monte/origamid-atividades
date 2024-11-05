import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

const Buttons = () => {
  const navigate = useNavigate();

  function handleClick(productName) {
    if (productName === 'Produtos') {
      navigate('/');
    } else if (productName === 'Contato') {
      navigate('/contact');
    }
  }

  return (
    <Container>
      <button onClick={() => handleClick('Produtos')}>Produtos</button>
      <button onClick={() => handleClick('Contato')}>Contato</button>
    </Container>
  );
};

export default Buttons;
