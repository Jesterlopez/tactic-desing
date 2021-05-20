import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  /* height: 50vh; */

  & .padding__custom {
    display: flex;
    align-items: center;
    height: 30vh;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
    justify-content: space-between;
    & > a {
      height: 70px;
    }
    & .font__bold {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 768px) {
      padding: 60px 40px;
      flex-direction: column;
      height: 13vh;

      & .text__italic {
        font-size: 0.9rem;
      }
      & .font__bold {
        font-size: 1.2rem;
      }
    }
  }
  & div > a,
  div > div {
    width: 240px;
    padding-right: 20px;
  }
  /* & #contact {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  & #send__email {
    transform: translate(0, -200%);
  }
  & #suscribe {
    transform: translate(0, -200%);
  }
  & #contact {
    transform: translate(0, -200%);
  }

  & #credits {
    transform: translate(0, -100%);
  } */
  @media screen and (max-width: 768px) {
    width: 100vw;
    & #contact {
      display: none;
    }
    .send__email {
      display: flex;
      width: 100%;
      flex-direction: column;
      left: 0;
    }
    & div > a {
      position: relative;
      bottom: 0;
      left: -35px;
      margin-bottom: 20px;
    }
  }
`;

export const Credits = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 200px;
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
  @media screen and (max-width: 768px) {
    display: none;
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
