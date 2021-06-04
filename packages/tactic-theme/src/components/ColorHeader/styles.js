import styled from "styled-components";

export const Color = styled.div`
  width: 50%;
  height: 68%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #606060;

  @media screen and (max-width: 768px) {
    width: 100%;
    animation: initial !important;
    height: 80%;
  }
`;
