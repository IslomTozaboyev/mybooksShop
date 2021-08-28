import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
  *{box-sizing: border-box;}

  a,
  a:hover {
    text-decoration: none;
    display: block;
    color: black;
  }
  ul{
    list-style-type: none;
    li{
      margin: 0;
      padding: 0;
    }
  }
`;
