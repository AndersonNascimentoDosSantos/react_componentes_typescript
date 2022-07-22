import { createGlobalStyle } from "styled-components";

import theme from "../theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${theme.colors.primaryColor100};
    color: ${theme.colors.secundaryColor500};
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  main{
    &.dark{
      background-color: ${theme.colors.primaryColor800};
      color:#fff;

      .smart-banner-container {
        color: #000;
      }
    }
  }
`;

export default GlobalStyle;
