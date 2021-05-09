import styled from "styled-components";
import { fadeIn } from "../Styles/animation";
export const Svg = styled.svg`
  width: 350px;
  height: 270px;
  position: fixed;
  transform: translateX(0%);
  transition: transform 1000ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  animation: ${fadeIn} 1s forwards;
`;
