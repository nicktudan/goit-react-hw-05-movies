import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: #212121;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img {
    display: block;
    max-width: 100%;
    /* height: auto; */
}

h1,
h2, 
h3, 
h4, 
p {
    margin-top: 0px;
    margin-bottom: 0px;
}

ol,
ul {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
}

button {
    font-size: 16px;
    text-align: center;
    border: none; 
    border-radius: 4px;
    cursor: pointer;
}

li {list-style: none;}
`;