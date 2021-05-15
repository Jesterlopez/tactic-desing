import styled from "styled-components";

export const BlockCont = styled.div`
  width: 100%;
  padding-right: 50%;
  @media screen and (max-width: 768px) {
    padding-right: 0%;
  }
  /* & .link__blockContent {
    position: relative;
    font-size: 1.2rem;
    &::before {
      content: "";
      position: absolute;
      bottom: 8px;
      top: 5px;
      height: auto;
      opacity: 0.5;
      left: -5px;
      right: -5px;
      transform: scaleX(0);
      background: var(--color-primary);
      transform-origin: bottom left;
      transition-duration: 400ms;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0px;
      right: 0px;
      height: 2px;
      overflow: hidden;
      background: var(--color-dark);
      transform-origin: bottom left;
      transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
      z-index: 0;
    }
    &:hover {
      &::before {
        transform: scaleX(1);
        transform-origin: bottom right;
      }
      &::after {
        transform: scaleX(0);
        transform-origin: bottom right;
        transition-duration: 400ms;
      }
    }
  } */
`;
