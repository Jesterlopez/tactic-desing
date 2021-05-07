import styled from "styled-components";

export const TitleH1 = styled.h1`
  text-transform: uppercase;
  font-family: "Gilroy Bold", sans-serif;
  font-weight: 900;
  font-size: 6rem;
  margin-bottom: 100px;
  line-height: 0.9;
  z-index: 2;
  & > * {
    display: block;
  }
  & > span:last-child {
    display: inline-block;
  }
  &::after {
    content: ".";
    display: inline-block;
  }
`;
