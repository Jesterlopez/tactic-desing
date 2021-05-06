import styled from "styled-components";

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 40px;
  right: 80px;
  height: 100%;
  z-index: 9;
  display: flex;
  align-items: center;
  transform: translateX(-100%);
  background: #fff;
  transition: transform 500ms cubic-bezier(1, 0, 0, 1) 0ms,
    left 500ms cubic-bezier(1, 0, 0, 1) 0ms;
`;

export const ContainerNav = styled.div`
  padding-left: calc(16vw - 60px);
  height: 360px;
`;

export const NavMenu = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  margin-bottom: 60px;
  margin-left: -10px;
  min-height: 220px;
`;

export const MenuFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55vw;
`;

export const ColorMenu = styled.div`
  background: #ff5851;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 500ms cubic-bezier(1, 0, 0, 1) 0ms;
  z-index: 8;
  opacity: 0;
  pointer-events: none;
`;
