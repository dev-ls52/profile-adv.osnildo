import styled from "styled-components";

export const StyledSection = styled.section`
  &.full {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: var(--green);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    margin-top: 2rem;
  }

  &.normal {
    margin: 0 auto;
    background-color: var(--white);

  }

  &.viewh {
    height: 100vh;
  }

  &.vieww {
    width: 100vw;
  }
`;

export const StyledSectionContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`;
