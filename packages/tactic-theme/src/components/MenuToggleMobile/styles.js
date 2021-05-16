import styled from "styled-components";

export const Toggle = styled.a`
  display: flex;
  align-items: center;
  transition: all 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  top: 45px;
  right: 25px;

  margin-top: -20px;
  height: 45px;
  width: 45px;
  position: fixed;
  margin-left: -10px;
  text-align: center;
  font-size: 0px;
  z-index: 100;
  cursor: pointer;
  z-index: 1000;
  border-radius: 50%;
  background: #fff;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.div`
  height: 2px;
  width: 20px;
  background: #000;
  position: relative;
  transition: all 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  &::before {
    content: "";
    height: 2px;
    width: 13px;
    background: #000;
    margin: 5px 0;
    right: 0;
    position: absolute;
    transition: all 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  }
  &::after {
    content: "";
    height: 2px;
    width: 16px;
    background: #000;
    margin: -5px 0;
    right: 0;
    position: absolute;
    transition: all 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  }
`;
