import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1000px;
  margin: auto;
  padding: 20px;

  /* border: 2px solid blueviolet; */

  > header {
    width: 100%;
  }

  > main {
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 20px;
    flex-wrap: wrap;

    padding: 20px 0px;
  }
`;
