import styled from "styled-components";

export const TitleH1 = styled.h1`
  text-transform: uppercase;
  font-family: "Gilroy Bold", sans-serif;
  font-weight: 900;
  font-size: 6rem;
  margin-bottom: 100px;
  line-height: 0.9;
  letter-spacing: -2px;
  z-index: 2;
  &.textUpImg {
    margin-bottom: -50px;
    z-index: 8;
    display: block;
  }
  & span {
    display: block;
  }
  & div:last-child {
    display: inline-block;
  }
  & span:last-child {
    display: inline-block;
  }
  &::after {
    content: ".";
    display: inline-block;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
    margin-bottom: 40px;

    &.textUpImg {
      margin-bottom: -20px;
    }
  }
`;
