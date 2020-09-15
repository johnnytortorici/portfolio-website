import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #495257;
    font-size: 1.2em;
    font-family: "Rubik", sans-serif;
  }

  a {
    color: #6B33E6;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  svg {
    display: block;
  }

  button {
    color: #495257;
    font-family: "Rubik", sans-serif;
    background: none;
  }

  h1 {
    font-size: 3.5em;
    font-weight: 300;
    text-decoration: underline;
    margin-bottom: 20px;
  }

  h2, h3 {
    font-size: 1.6em;
    font-weight: 300;
    margin-bottom: 30px;
  }

  h4 {
    font-size: 1.2em;
    font-weight: 500;
  }
`;
