import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1000px;
  margin: auto;
  padding: 20px;

  > header {
    width: 100%;
  }

  > main {
    max-width: 650px;
    height: 500px;

    margin-top: 50px;

    display: flex;

    /* border: 2px solid wheat; */
  }
`;

export const ImgDetails = styled.div`
  width: 100%;
  /* border: 2px solid red; */

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const ContainerText = styled.div`
  width: 100%;
  padding: 20px;
  /* border: 2px solid palevioletred; */
`;
