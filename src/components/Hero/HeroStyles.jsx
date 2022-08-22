import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: #20232a;
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  border-radius: 20px;
`;

export const ImageContainer = styled.div`
  height: 100%;
  margin: 0 auto;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  p {
    font-size: 3rem;
    padding: 1rem;
    margin: 0 auto;
    width: 60%;
  }
`;
