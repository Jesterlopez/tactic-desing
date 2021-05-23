import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding: 0 40px;
  position: fixed;
  z-index: 12;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    position: relative;
    z-index: inherit;
  }
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
  @media screen and (max-width: 768px) {
    top: 30px;
    left: 0px;
    position: absolute;
  }
`;

export const NamePage = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  color: var(--color-dark);
  font-size: 0.8rem;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
  @media screen and (max-width: 768px) {
    position: fixed;
    display: none;
  }
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
