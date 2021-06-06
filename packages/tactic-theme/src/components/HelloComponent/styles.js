import styled from "styled-components";
import { fadeIn } from "../Styles/animation";
import {
  HLeftMove,
  HRightMove,
  HMidMove,
  ELeftMove,
  ETopMove,
  EMidMove,
  EBottomMove,
  LOneLongMove,
  LOneShortMove,
  LTwoLongMove,
  LTwoShortMove,
  OMove,
  RedDotMove,
} from "../Styles/animation";
export const Svg = styled.svg`
  width: 350px;
  height: 270px;
  position: fixed;
  transform: translateX(0%);
  transition: transform 1000ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  animation: ${fadeIn} 1s forwards;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 160px;
  }
`;

export const SVG = styled.svg`
  width: 350px;
  height: 280px;
  position: fixed;
  transform: translateX(0%);
  transition: transform 1000ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  animation: ${fadeIn} 1s forwards;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 160px;
  }
`;

export const HLeft = styled.path`
  stroke-dasharray: 124px;
  stroke-dashoffset: 124px;
  animation: ${HLeftMove} 20s ease forwards;
`;

export const HMid = styled.path`
  stroke-dasharray: 37px;
  stroke-dashoffset: 37px;
  animation: ${HMidMove} 9s ease forwards;
`;

export const HRight = styled.path`
  stroke-dasharray: 124px;
  stroke-dashoffset: 124px;
  animation: ${HRightMove} 13s ease forwards;
`;

export const ELeft = styled.path`
  stroke-dasharray: 124px;
  stroke-dashoffset: 124px;
  animation: ${ELeftMove} 20s ease forwards;
`;

export const ETop = styled.path`
  stroke-dasharray: 47px;
  stroke-dashoffset: 47px;
  animation: ${ETopMove} 10s ease forwards;
`;

export const EMid = styled.path`
  stroke-dasharray: 42px;
  stroke-dashoffset: 42px;
  animation: ${EMidMove} 10s ease forwards;
`;

export const EBottom = styled.path`
  stroke-dasharray: 47px;
  stroke-dashoffset: 47px;
  animation: ${EBottomMove} 10s ease forwards;
`;

export const LOneLong = styled.path`
  stroke-dasharray: 124px;
  stroke-dashoffset: 124px;
  animation: ${LOneLongMove} 20s ease forwards;
`;

export const LOneShort = styled.path`
  stroke-dasharray: 44px;
  stroke-dashoffset: 44px;
  animation: ${LOneShortMove} 10s ease forwards;
`;

export const LTwoLong = styled.path`
  stroke-dasharray: 124px;
  stroke-dashoffset: 124px;
  animation: ${LTwoLongMove} 20s ease forwards;
`;

export const LTwoShort = styled.path`
  stroke-dasharray: 44px;
  stroke-dashoffset: 44px;
  animation: ${LTwoShortMove} 10s ease forwards;
`;

export const O = styled.circle`
  stroke-dasharray: 302px;
  stroke-dashoffset: 302px;
  animation: ${OMove} 20s ease forwards;
`;

export const Dot = styled.path`
  stroke-width: 44px;
  stroke-linecap: round;
  animation: ${RedDotMove} 8s ease-out forwards;
`;
