import styled from "styled-components";

export const StyledMain = styled.main``;
export const StyledMainCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0;
  }
`;
export const StyledMainCardHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
export const StyledMainCardContent = styled.div`
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;

  label {
    font-size: 1.3rem;
    text-align: justify;
  }
  p {
    text-align: justify;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const StyledMainCardContentLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
