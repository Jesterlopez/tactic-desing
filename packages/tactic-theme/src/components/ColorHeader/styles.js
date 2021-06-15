import styled from "styled-components";

export const Color = styled.div`
  &.servicios {
    width: 50%;
    height: 68%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #414a6b;
  }

  &.nosotros {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    background: var(--color-yellow);
  }
  &.normal {
  }
  &.home {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--color-primary);
    z-index: 9;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    animation: initial !important;
    height: 80%;
    &.servicios {
      width: 100%;
      height: 76%;
    }
    &.home {
      opacity: 0;
      /* z-index: 0; */
    }
  }
`;
