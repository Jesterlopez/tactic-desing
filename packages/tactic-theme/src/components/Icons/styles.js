import styled, { css } from "styled-components";

export const ArrowRight = styled.i`
  display: block;
  position: absolute;
  width: 40px;
  top: 30%;
  right: 95%;
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

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  /* background: #000; */
  border-radius: 50%;
  display: block;
  border: 2px solid #fff;
  background: transparent;
  position: fixed;
  right: 40px;
  top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  &.colorTwo {
    border: 2px solid #000;
    &::after {
      background: #000;
    }
    &::before {
      background: #000;
    }
  }
  &::after {
    content: "";
    width: 50%;
    height: 2px;
    background: #fff;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
  }
  &::before {
    content: "";
    width: 50%;
    height: 2px;
    background: #fff;
    top: 50%;
    position: absolute;
    transform: rotate(45deg);
  }
`;
export const CircleClose = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: block;
  border: 2px solid #606060;
  background: transparent;
  position: fixed;
  right: 40px;
  top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  cursor: pointer;

  &:hover div {
    transform: rotate(-90deg);
  }

  &:focus {
    outline: none;
  }
`;

export const Equis = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 240ms cubic-bezier(0.56, 0, 0.265, 1);

  &::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 36%;
    transform: rotate(-45deg);
  }
  &::before {
    content: "";
    width: 30%;
    height: 2px;
    background: #fff;
    top: 50%;
    left: 36%;
    position: absolute;
    transform: rotate(45deg);
  }
`;

export const ArrowContact = styled.svg`
  transform: rotate(42deg) scale(1.5);
  transition: transform 240ms cubic-bezier(0.56, 0, 0.265, 1);
  fill: #fff;
  &:hover {
    transform: rotate(0) scale(1.6);
    fill: var(--color-primary);
  }
`;
