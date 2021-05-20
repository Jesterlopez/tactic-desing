import styled from "styled-components";

export const ContainerScroll = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
`;

export const IndicatorScrollDown = styled.span`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  position: fixed;
  left: 47%;
  top: 85%;
  transform: rotate(-90deg);
  display: flex;
  flex-direction: row-reverse;
  transition: transform 1000ms cubic-bezier(0.7, 0, 0.3, 1) 0ms,
    opacity 250ms linear 0ms;

  &.scrollDownTwo {
    color: #000;
    position: fixed;
    top: 90vh;
    width: 22px;
    left: 3%;
    z-index: 10;
    & > i path {
      fill: #000;
    }
  }
`;
