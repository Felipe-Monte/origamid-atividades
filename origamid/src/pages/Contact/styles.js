import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 600px;
  margin: auto;
  padding: 20px;

  > header {
    width: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

export const ContainerImg = styled.div`
  width: 380px;
  height: 500px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const ContainerText = styled.div`
  padding: 0px 20px;
  width: 50%;

  font-family: Arial, Helvetica, sans-serif;

  p {
    position: relative;
    margin-left: 30px;
    font-size: 18px;
  }

  p::before {
    content: '';
    position: absolute;

    top: 50%;
    left: -30px;
    bottom: 50%;

    height: 2px;
    width: 20px;

    background-color: #eee;
  }
`;
