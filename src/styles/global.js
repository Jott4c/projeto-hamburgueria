import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --color-background-secundary:#F5F5F5;
    --color-background-primary:#fff;
    --color-primary: #27AE60;
    --grey-100:#E0E0E0;
    --color-gradient:#eb5757;
    --negative:  #E60000;
    --sucess:#168821;
}

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
}

body, html {
    width:100vw;
    height:100vh;
 }

button {
    cursor: pointer;
    
}

button:hover{
    filter:brightness(0.8);
  
}
`;
