import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  background: #fff;
  & .padding__custom {
    display: flex;
    align-items: center;
    height: 30vh;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
    justify-content: space-between;
  }
`;

export const Credits = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  & .logo__company {
    height: 40px;
    display: flex;
    flex-direction: column;
  }
  .logo__company > img {
    height: 50%;
    display: block;
    margin: 0 auto 8px;
    margin-right: 0;
  }
  .credit__link {
    display: block;
    color: #b4b4b4;
    font-size: 0.6rem;
    text-decoration: none;
    font-family: "Lato", sans-serif;
  }
  .logo__company.credit__link:hover {
    text-decoration: none;
  }
  .credit__link:hover {
    text-decoration: underline;
  }
`;
// .credits {
// }

// .logo__company > img {
//   height: 50%;
//   display: block;
//   margin: 0 auto 8px;
//   margin-right: 0;
// }
// .credit__link {
//   display: block;
//   color: #b4b4b4;
//   font-size: 0.6rem;
//   text-decoration: none;
//   font-family: "Lato", sans-serif;
// }
// .logo__company.credit__link:hover {
//   text-decoration: none;
// }
// .credit__link:hover {
//   text-decoration: underline;
// }
