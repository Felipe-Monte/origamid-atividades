import React from 'react';
import { Container, ContainerImg, TitleProduct } from './styles';

const CardProduct = ({ id, title, photo }) => {
  return (
    <Container to={`/details/${id}`}>
      <ContainerImg>
        <img src={photo} alt="imagem do produto" />
      </ContainerImg>

      <TitleProduct>
        <span>{title}</span>
      </TitleProduct>
    </Container>
  );
};

export default CardProduct;
