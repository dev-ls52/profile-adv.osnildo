import styled from "styled-components";

export const FooterStyled = styled.footer`
    height: 1.5rem;    
    position: fixed;
    bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const WhatsLogo = styled.a`  
    text-decoration: none;
    display: flex;
    align-items: center;  
    justify-content: center;
    gap: 1.3rem;  
    padding: 1.3rem 2.5rem;
    border: none;
    background-color: rgba(37, 211, 102, 1);
    color: white;
    font-size: 1.1rem;
    font-weight: 900;
    border-radius: .3rem;    

    &:hover{
        background-color: rgba(17, 58, 63, 1);
        transition: .3s;
       border: 1px solid white;
   }

    .icon{
        width: 1rem;
        height: 1rem;   
        color: white;
   }  
`

export const EndButton = styled.a`
    position: fixed;
    right: 0;
    margin-right: 1rem;
    border-radius: 0.25rem;
    padding: .7rem;
    font-size: 1.3rem;
    bottom: 1rem;
    display: flex;
    color: white;
    background-color: rgba(17, 58, 63, 1);
    border: 1px solid white;

    &.showBtn{
        opacity: 1;
        transition: .3s;        
    }

    &.hideBtn{
        opacity: 0;
        transition: .3s;
    }
`