import styled from "styled-components";

export const AnchorEmail = styled.a`
  color: #1c1b20;
  text-decoration: none;
  position: relative;
  &:hover > i {
    transform: translate(40px, -50%);
    width: 100px;
    & .inner {
      width: 40px;
    }
  }
  & > span {
    display: block;
  }
  & .font__bold {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 800;
  }
  & .text__italic {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
    width: 100%;
    transform: translateY(0) !important;
  }
`;

export const AnchorNewsletter = styled.a`
  color: #1c1b20;
  text-decoration: none;
  position: relative;
  & > span {
    display: block;
  }
  & .font__bold {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 800;
  }
  & .text__italic {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    transform: translateY(0) !important;
    position: absolute;
    bottom: 150px;
    left: 40px;
    width: 100% !important;
  }
`;
