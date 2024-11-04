import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 64%;
  margin: auto;
  padding: 20px;
/* 
  border: 2px solid blueviolet; */

  > header {
    width: 100%;
  }

  > main {
    width: 100%;

    display: flex;
    justify-content: left;
    
    gap: 20px;
    flex-wrap: wrap;

    padding: 20px 0px;
    /* border: 2px solid green; */
  }
`