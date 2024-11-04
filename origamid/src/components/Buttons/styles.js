import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  /* border: 2px solid red; */

  button {
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 8px;

    font-size: 16px;
  }

  button:hover {
    background-color: #191516;
    cursor: pointer;
  }

  button:active {
    background-color: rgba(255, 255, 255, 0.87);
    color: #191516;
  }
`;
