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

// .menuOpen Menu{
//   transform: translateX(0%) !important;
//     left: 40px;
//     right: 20%;
// }

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
`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Gilroy Light", sans-serif;
  margin: 40px 0;
  font-size: 13px;
  & > * {
    font-size: 0.9em;
    line-height: 1.6;
    color: #1c1b20;
    margin: 0px;
    font-weight: 500;
    text-decoration: none;
  }
  & > .contact__phone,
  .contact__email {
    font-weight: 900;
    font-size: 1.1em;
    font-family: "Gilroy Bold", sans-serif;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MenuFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55vw;
`;
