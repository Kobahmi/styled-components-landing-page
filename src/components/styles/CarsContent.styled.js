import styled from "styled-components";

export const BigWrapper = styled.div`
  height: 50vh;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  flex-direction: ${(props) => props.layout || "row"};

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    height: 100vh;
    font-size: 0.7rem;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 50vw;
  padding-inline: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
    padding-block: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
