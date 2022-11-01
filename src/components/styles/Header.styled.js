import styled from "styled-components";

export const BigWrapper = styled.div`
  background-color: #ebfbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1rem;
`;

export const Image = styled.img`
  width: 20rem;
`;

export const Wrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5rem;
  width: clamp(10vw, 1000px, 90vw);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const Wrapper3 = styled.div`
  display: flex;
  justify-content: center;
  width: clamp(10vw, 1000px, 90vw);
  gap: 3rem;
  padding-block: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 1rem;

  border: none;
  transition: 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    scale: 103%;
  }
`;

export const RedButton = styled(Button)`
  color: white;
  background-color: palevioletred;
  width: 15rem;
`;

export const BigLogo = styled.div`
  font-size: 2rem;
`;
