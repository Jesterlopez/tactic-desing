import styled, { css } from "styled-components";

export const Borders = styled.div`
  & > * {
    transition: transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BorderTop = styled.div`
  position: fixed;
  background: #fff;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  transform-origin: top center;
  @media screen and (max-width: 768px) {
    height: 20px;
  }
`;

export const BorderBottom = styled.div`
  position: fixed;
  background: #fff;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  transform-origin: bottom center;
  @media screen and (max-width: 768px) {
    height: 20px;
  }
`;

export const BorderLeft = styled.div`
  position: fixed;
  background: #fff;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100%;
  width: 40px;
  transform-origin: left center;
  @media screen and (max-width: 768px) {
    width: 20px;
  }
`;

export const BorderRight = styled.div`
  position: fixed;
  background: #fff;
  z-index: 10;
  top: 0;
  right: 0;
  height: 100%;
  width: 40px;
  transform-origin: right center;
  @media screen and (max-width: 768px) {
    width: 20px;
  }
`;
