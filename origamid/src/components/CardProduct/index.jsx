import React from 'react';
import { Container, ContainerImg, TitleProduct } from './styles';

const CardProduct = () => {
  return (
    <Container>
      <ContainerImg>
        <img src="/remedio.jpg" alt="imagem do produto" />
      </ContainerImg>

      <TitleProduct>
        <span>Notebook</span>
      </TitleProduct>
    </Container>
  );
};

export default CardProduct;
