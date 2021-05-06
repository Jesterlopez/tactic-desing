import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding: 0 40px;
  position: fixed;
  z-index: 10;
  box-sizing: border-box;
`;

export const Head = styled.span`
  text-transform: uppercase;
  width: 100%;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  max-height: 40px;
  align-items: center;
  z-index: 9;
`;

export const Brand = styled.div`
  transition: transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  padding: 0px;
  height: 40px;
  line-height: 40px;
  left: 40px;
  margin: 0px;
  color: inherit;
  white-space: nowrap;
  align-items: center;
  float: left;
`;

export const BrandImg = styled.img`
  height: 100%;
  width: 120px;
  padding: 5px;
  box-sizing: border-box;
  background: #3cd;
`;

export const NamePage = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  color: var(--color-dark);
  font-size: 0.8rem;
  margin-left: 5px;
`;

export const ToggleLang = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  transition: transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  position: fixed;
  z-index: 1000;
  top: 20px;
  right: 40px;
  & li {
    margin: 0 5px;
    font-size: 12px;
    & a {
      text-decoration: none;
      color: #1c1b20;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

export const HeaderMiddle = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const ToggleMenu = styled.a`
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
