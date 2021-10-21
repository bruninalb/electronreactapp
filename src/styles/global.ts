import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary: #00F3FF;
    --gray: lightgray;
  }
    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
      transition: filter 500ms;

      -webkit-touch-callout: none;  /* iPhone OS, Safari */
      -webkit-user-select: none;    /* Chrome, Safari 3 */
      -khtml-user-select: none;     /* Safari 2 */
      -moz-user-select: none;       /* Firefox */
      -ms-user-select: none;        /* IE10+ */
      user-select: none;            /* Possível implementação no futuro */
      
      &:hover{
        cursor: default;
      }
    }
    body{
      font-family: "Poppins", sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    
    html{
      @media (max-width: 1080px){
        font-size: 93.75%;
      }
      @media (max-width: 720px){
        font-size: 87.50%;
      }
    }
    
    button{
      &:hover{
        cursor: pointer;
      }
    }
`