import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  h1, h2, h3 {
    font-family: 'Arial', sans-serif;
    color: #444;
  }

  button {
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: #005bb5;
  }

  .container {
    width: 80%;
    margin: auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export default GlobalStyle;
