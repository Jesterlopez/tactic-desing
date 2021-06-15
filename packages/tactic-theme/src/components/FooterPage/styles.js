import styled from "styled-components";

export const Footer = styled.footer`
  padding-top: 5vh;
  position: relative;
  bottom: 0;
  left: 0;
  /* z-index: -1; */
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  /* height: 50vh; */
  transition: 0.5s all;
  & #contact {
    transform: translateY(-100px);
  }
  & #send__email {
    transform: translateY(100px);
  }
  & #suscribe {
    transform: translateY(-100px);
  }
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
      height: auto;

      & .text__italic {
        font-size: 0.9rem;
      }
      & .font__bold {
        font-size: 1.2rem;
      }
      & #contact {
        transform: translateY(0) !important;
      }
      & #send__email {
        transform: translateY(0) !important;
      }
      & #suscribe {
        transform: translateY(0) !important;
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
    padding-left: 40px;
    box-sizing: border-box;
    position: fixed;
    & #contact {
      width: 100% !important;
      margin-bottom: 20px;
      /* display: none; */
    }
    & #credits {
      width: 100% !important;
    }
    .send__email {
      display: flex;
      width: 100% !important;
      flex-direction: column;
    }
    & div > a {
      position: relative;
      bottom: 0;
      left: -35px;
      margin-bottom: 10px;
    }
  }
`;

export const Credits = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 200px;
  transform: translateY(-100px);
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
    /* display: none; */
    order: 2;
    text-align: left;
    width: 100%;
    transform: translateY(0) !important;

    .logo__company {
      display: flex;
      /* flex-direction: column; */
      position: relative;
      margin-bottom: 30px;
      & > img {
        width: 40px;
        height: 100%;
        margin: 0;
      }
      & > span {
        margin-top: 10px;
      }
      .credit__link {
        margin-bottom: 5px;
      }
    }
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
