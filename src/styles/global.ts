import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{        
        --white: #d4d4d4;
        --green: #113a3f;
        --yellow:#b69764;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        list-style: none;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background:var(--white);
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button{
        font-family: 'Poppins', 'Roboto', Verdana, sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }
    
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;    
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;         
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: .3rem;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    
    #imgTitle{
       display: flex; 
       height: 100%; 
       width: 100%; 
       align-items: center; 
       padding-left: 16rem;
    }

    @media(max-width: 800px){
        #imgTitle{
            padding-left: 2rem;            
        }
    }

`