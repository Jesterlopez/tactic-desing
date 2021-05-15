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
    font-size: 1.5rem;
    font-weight: 800;
  }
  @media screen and (max-width: 768px) {
    display: none;
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
    font-size: 1.5rem;
    font-weight: 800;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 150px;
    left: 40px;
  }
`;
