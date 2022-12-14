import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Sora', sans-serif;
  }

  body{
    background-color: #fff;
    font-size: 1.3rem;
  }

  button{
    cursor: pointer;
  }

`;
