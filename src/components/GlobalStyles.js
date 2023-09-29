import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
}

h1, h2 {
    color: red;
}

button {
    background-color: black;
    color: #fff; 
    padding: 10px 20px;
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
    font-size: 16px; 
}

p {
    color: black;
    font-size: 24px;
}
`;



