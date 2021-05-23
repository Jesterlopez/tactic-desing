import styled, { css } from "styled-components";

export const ArrowRight = styled.i`
  display: block;
  position: absolute;
  width: 40px;
  top: 50%;
  right: 100%;
  margin-right: 80px;
  transform: translateY(-50%);
  transition: all 600ms cubic-bezier(1, 0, 0, 1) 0ms;

  & .inner {
    background: #1c1b20;
    width: 100%;
    height: 2px;
    display: block;
    float: right;
    transition: width 600ms cubic-bezier(1, 0, 0, 1) 0ms;
  }

  & > svg {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translate(2px, -50%);
  }
`;

export const IconWave = styled.i`
  display: block;
  display: inline-flex;
  align-items: center;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.3, 1);
  position: relative;
  max-width: 80px;

  & > div {
    position: absolute;
    top: 0px;
    right: 0;
    background: #ff5851;
    width: 100%;
    height: 100%;
  }
  &.big svg {
    width: 50px;
    height: 10px;
    margin-bottom: 30px;
  }
  &.big div {
    background: #f8f8f8;
  }

  & svg {
    width: 25px;
    height: 5px;

    & > * {
      fill: none;
      stroke: var(--color-dark);
      stroke-width: 5px;
      stroke-dashoffset: 0;
      stroke-dasharray: 0px, 0px;
    }
  }
`;

export const IconScroll = styled.i`
  display: inline-block;
  vertical-align: middle;
  & svg {
    display: block;
    font-size: 1rem;
  }
`;
