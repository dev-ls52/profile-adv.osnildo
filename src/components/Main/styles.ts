import styled from "styled-components";

export const StyledMain = styled.main``;

export const StyledMainColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const StyledMainRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledMainCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 900px) {
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

export const StyledMainText = styled.div`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`
export const StyledMainActingCard = styled.div`
  padding: 3rem 1.5rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
  background-color: #ddd;
  color: var(--green);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
`;
