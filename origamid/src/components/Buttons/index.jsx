import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

const Buttons = () => {
  return (
    <Container>
      <NavLink to="/">Produtos</NavLink>
      <NavLink to="/contact">Contato</NavLink>
    </Container>
  );
};

export default Buttons;
