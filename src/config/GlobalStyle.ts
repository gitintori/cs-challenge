import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: var(--white);
  }
`


export default GlobalStyle