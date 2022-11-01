import styled from "styled-components";

export const CardWrapper = styled.div`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  flex-direction: ${(props) => props.layout || "row"};

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 20rem;
  height: 18rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
