import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
 
  a {
    width: 100px;
    padding: 10px;

    text-decoration: none;

    font-size: 16px;

    border-radius: 8px;

    background-color: gray;
    color: black;
  }

  a:hover {
    background-color: white;
    cursor: pointer;
  }

  a:active {
    background-color: rgba(255, 255, 255, 0.87);
    color: #191516;
  }
`;
