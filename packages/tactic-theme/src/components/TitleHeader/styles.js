import styled from "styled-components";

export const H1 = styled.h1`
  width: 280px;
  height: 235px;
  font-size: 7.2rem;
  line-height: 1;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  flex-direction: column;
  text-transform: uppercase;
  position: absolute;
  top: 30%;
  color: var(--color-dark);
  left: 15%;
  & > span {
    display: block;
    transform: scaleY(1.1);
  }

  @media screen and (max-width: 768px) {
    width: 140px;
    height: 140px;
    font-size: 5.5rem;
    line-height: 1;
    margin-bottom: 20px;
    left: 10%;
  }
`;
