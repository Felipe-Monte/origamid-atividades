import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1000px;
  margin: auto;
  padding: 20px;

  border: 2px solid blueviolet;

  > header {
    width: 100%;
  }

  > main {
    min-width: 600px;
    height: 400px;

    margin-top: 20px;

    display: flex;

    border: 2px solid wheat;
  }
`;

export const ImgDetails = styled.div`
  width: 100%;
  border: 2px solid red;
`;
export const ContainerText = styled.div`
  width: 100%;
  border: 2px solid palevioletred;
`;
