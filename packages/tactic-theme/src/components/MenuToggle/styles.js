import styled from "styled-components";

export const Toggle = styled.a`
  display: flex;
  align-items: center;
  transition: all 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  top: 50%;
  left: 40px;
  right: inherit;
  margin-top: -20px;
  height: 40px;
  width: 40px;
  position: fixed;
  margin-left: -10px;
  text-align: center;
  font-size: 0px;
  z-index: 100;
  cursor: pointer;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    display: none;
  }
  &:hover {
    margin-left: 5px;
    & > div > span {
      &:nth-child(1) {
        transform: translateY(-5px);
      }
      &:nth-child(2) {
        transform: translateY(5px);
      }
      &:nth-child(3) {
        transform: translateY(-2px);
      }
      &:nth-child(4) {
        transform: translateY(3px);
      }
    }
  }
  &:hover {
    & .iconMenu::before {
      width: 20px;
    }
    & .iconMenu {
      width: 32px;
    }
    & .iconMenu::after {
      width: 17px;
    }
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

export const Text = styled.div`
  transform: rotate(-90deg);
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  width: 100%;
  right: -25px;
  text-align: center;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  color: var(--color-dark);
  & > span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.3, 1);
  }
`;
