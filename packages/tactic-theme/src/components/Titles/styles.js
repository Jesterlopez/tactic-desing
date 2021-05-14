import styled from "styled-components";

export const TitleBlock = styled.span`
  font-size: 1.8rem;
  font-weight: 900;
  overflow: hidden;
  line-height: 1.2;
  font-family: "Gilroy Bold", sans-serif;
  display: block;
  &.text__italic {
    font-size: 2.1rem;
  }

  &.italic {
    font-family: "Libre Baskerville", serif;
    font-weight: 300;
    font-style: italic;
  }
  &.Bold {
    line-height: 1.2;
    font-weight: 900;
  }
`;
