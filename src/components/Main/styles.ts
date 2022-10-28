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
    align-items: center;
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
`;
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

export const StyledMainProfileCard = styled.div`
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
  background-color: #ddd;
`;
export const StyledMainProfileCardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  label {
    font-size: 1.5rem;
    text-align: center;
  }
`;
export const StyledMainProfileCardLogo = styled.div`
  padding: 0;
  height: 500px;
`;

export const StyledMainContact = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 2rem;
  margin-bottom: 5rem;

  a {
    text-decoration: none;
    color: var(--green);
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const StyledMainContactCard = styled.div`
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
  background-color: #ddd;
  width: 100%;

  &:hover {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
    transform: scale(1.02);
    cursor: pointer;
  }
`;
export const StyledMainContactCardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--green);

  label {
    font-size: 0.8rem;
    font-weight: bold;
  }
  span {
    font-size: 1rem;
  }
`;
