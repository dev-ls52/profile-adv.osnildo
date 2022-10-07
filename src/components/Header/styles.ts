import styled, { keyframes } from "styled-components";

// ANIMATIONS
export const AnimationfromLeft = keyframes`
    0%{
        transform: translate3d(10rem, 0, 0);
    }
    100%{
        transform: translate3d(0, 0, 0);
    }    
`

// COMPONENTS - HEADER
export const HeaderArea = styled.header`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;

    a{
        text-decoration: none;
    }

    &.bgGreen{
        background-color: var(--green);
       *{
            color: var(--white);
        }
    }

    &.bgWhite{
        background-color: var(--white);
        *{
            color: var(--green);
        }
    }
`
export const HeaderContent = styled.div`
    max-width: 75rem;
    margin: 0 auto;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const HeaderLogo = styled.div`

`
export const HeaderNav = styled.div`
    ul{
        display: flex;
        gap: 1.5rem;
    }

    @media (max-width:768px){      
        display: none;      
    }
`

// COMPONENTS - HAMBURGER-MENU
export const HbgMenuArea = styled.div`
    display: none;

    @media (max-width:768px) {
        display: block;          
    }
`
export const HbgMenuIcon = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    padding: 1.5rem;
    z-index: 100;
`
export const HbgMenuContent = styled.div`
    position: fixed;
    right: 0;
    top: 0;    
    height: 100vh;
    background-color: var(--green);
    animation: .3s ${AnimationfromLeft};
    padding: 4rem 1.5rem;
    box-shadow: 0 0 .2rem 0 var(--yellow);
   
   ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
   }
   ul li{        
        width: 10rem;
        height: 3rem;
        border-radius: .5rem;
        border: 1px solid var(--yellow);        
   }
   ul li a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        margin-left: 1rem;
        font-weight: bold;
        gap: 1rem;        
   }
`
export const HbgMenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    z-index: -1;
`
