import React from 'react';
import { Container, ContainerImg, TitleProduct } from './styles';

const CardProduct = ({ title }) => {
  return (
    <Container to="/details">
      <ContainerImg>
        <img src="/remedio.jpg" alt="imagem do produto" />
      </ContainerImg>

      <TitleProduct>
        <span>{title}</span>
      </TitleProduct>
    </Container>
  );
};

export default CardProduct;
