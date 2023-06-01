import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin:  0;
  padding: 0;
  font-size: 10px;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
}

body {
  width: 100%;
  min-height: 100vh;
  background-color: #2B2B2B;
  overflow-x: hidden;
}

`;
