import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  border: 2px solid white;
  display: flex;
  flex-direction: column;

  width: 220px;
  height: 320px;

  border-radius: 8px;
  overflow-x: hidden;

  cursor: pointer;

  &:hover {
    opacity: .9;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  overflow: hidden;

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const TitleProduct = styled.div`
  background-color: red;
  height: 50px;
  width: 100%;

  text-align: left;

  padding: 10px;
`;