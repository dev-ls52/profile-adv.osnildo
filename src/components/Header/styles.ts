import styled, { keyframes } from "styled-components";

// ANIMATIONS
const AnimationfromLeft = keyframes`
    0%{
        transform: translate3d(10rem, 0, 0);
    }
    100%{
        transform: translate3d(0, 0, 0);
    }    
`
const AnimeOverlay = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

// COMPONENTS - HEADER
export const StyledHeaderArea = styled.header`
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
export const StyledHeaderContent = styled.div`
    max-width: 75rem;
    margin: 0 auto;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const StyledHeaderLogo = styled.div`

`
export const StyledHeaderNav = styled.div`
    ul{
        display: flex;
        gap: 1.5rem;
    }

    @media (max-width:768px){      
        display: none;      
    }
`

// COMPONENTS - HAMBURGER-MENU
export const StyledHbgMenuArea = styled.div`
    display: none;

    @media (max-width:768px) {
        display: block;          
    }
`
export const StyledHbgMenuIcon = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    padding: 1.5rem;
    z-index: 100;
`
export const StyledHbgMenuContent = styled.div`
    position: fixed;
    right: 0;
    top: 0;    
    height: 100vh;
    background-color: var(--green);
    animation: .3s ${AnimationfromLeft};
    padding: 5rem 1.5rem;
    box-shadow: 0 0 .2rem 0 var(--yellow);
   
   ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
   }
   ul li{
        width: 12rem;
        height: 4rem;
        border-radius: .25rem;
        /* border: 1px solid var(--yellow); */
        box-shadow: 0 0 .25rem .1rem rgba(0,0,0,.2);
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
   ul li a span{       
        display: flex;
        align-items: center;
        justify-content: start;       
   }
`
export const StyledHbgMenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    z-index: -1;
    animation: .3s ${AnimeOverlay};
`
