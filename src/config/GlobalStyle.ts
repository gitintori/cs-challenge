import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --grey: #808B96;
    --light-grey: #ABB2B9;
    --black: #000000;
    --blue: #4682B4;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    font-family: 'Roboto', sans-serif;
      a {
        text-decoration: none; 
        color: inherit;
    }
  }

  body {
    background-color: var(--white);
  }
`


export default GlobalStyle
