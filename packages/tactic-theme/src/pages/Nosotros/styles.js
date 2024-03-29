import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  position: relative;
`;

export const ColorYellow = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  left: 27%;
  height: 100%;
  background: var(--color-yellow);

  @media screen and (max-width: 768px) {
    height: 340px;
    width: 100%;
    position: absolute;
    top: 50vh;
    left: 0% !important;
  }
`;

export const HeaderContent = styled.div`
  width: 37%;
  font-size: 1.9rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  font-weight: 900;
  font-family: "Poppins", sans-serif;
  top: 30%;
  right: 15%;
  line-height: 1.3;
  color: #fff;
  & p {
    margin-bottom: 30px;
    color: var(--color-dark);
    opacity: 0;
  }
  & div {
    overflow: hidden;
    height: 100%;
  }
  & span {
    transform: translateY(80px);
    display: block;
    color: #fff;
  }

  /* & span:last-child {
    color: var(--color-dark);
  } */
  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 1.8rem;
    top: 60%;
    right: 0%;
    padding-left: 10%;
  }
`;

export const ContainerSection = styled.section`
  width: 100vw;
  background: #f8f8f8;
  padding: 20vh 0 20vh 0%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: relative;
  & ul {
    opacity: 0;
  }
  & > .margin__bottom__100 {
    margin-bottom: 100px;
  }
  &.container__services {
    background: var(--color-dark);
    padding-top: 10%;
    padding-left: 10%;
    & .padding__right__none {
      padding-left: 0 !important;
      & .title__mobile {
        font-size: 2.4rem;
      }
    }
  }
  &.margin__top__negative {
    padding-top: 30px;
    margin-top: -66px;
  }
  &.line__timeline {
    border-top: 1px solid #e0e0e0;
  }
  &.padding__top__none {
    padding-top: 0;
  }

  & .titles__about {
    font-size: 2.5rem;
  }

  & > .list__timeline {
    display: flex;
    list-style: none;
    margin: -30px auto;
    & > .timelineItem {
      margin: 0 50px;

      & > h3 {
        font-weight: 700;
      }
    }
  }
  & .content__italic {
    font-size: 1.2rem;
    line-height: 1.2;
  }
  @media screen and (max-width: 768px) {
    padding: 0vh 0 0vh 0%;
    /* padding-bottom: 70px; */

    & .content__italic {
      font-size: 0.9rem;
      line-height: 1.2;
    }

    & > .margin__bottom__100 {
      margin-bottom: 0;
    }
    & .titles__about {
      font-size: 2rem;
    }
    &.margin__top__negative {
      padding-top: 65px;
      padding-bottom: 0;
    }
    & .content__italic {
      font-size: 1.2rem;
      line-height: 1.2;
      /* font-style: normal; */
      /* font-family: "L", sans-serif; */
    }
    /* &.padding__top {
      padding-top: 70px;
    } */
    &.line__timeline {
      border-top: 0;
    }
    & > .list__timeline {
      flex-direction: column;
      margin: 0;
      width: 100%;
      & > .timelineItem {
        height: 222px;
        /* margin-top: 50px;
        margin-bottom: 70px; */
        margin-left: 0;
        margin-right: 0;
        padding-left: 10%;
      }
    }
  }
`;

export const HeadBlockContent = styled.div`
  margin-bottom: 40px;
  color: var(--color-dark);

  & H2 {
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    padding-left: 0 !important;
    margin-bottom: 0;
  }
  &.animate {
    opacity: 0;
  }
`;
export const BodyContent = styled.div`
  margin-bottom: 40px;
  font-size: 0.9rem;
  line-height: 1.3rem;
  box-sizing: border-box;
  color: #606060;
  &.padding__left__20 {
    padding-left: 20%;
  }
  & p {
    margin-top: 30px;
    display: block;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin-right: 0% !important;
    padding-right: 10% !important;

    &.padding__left__10 {
      padding-left: 10%;
    }
    & p {
      margin-top: 20px !important;
    }
  }
`;

export const ContainerRight = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .blockOne {
    transform: translateY(150px);
  }

  .blockTwo {
    transform: translate(-105px, -150px);
  }

  &.padding__left__10 {
    padding-left: 10%;
  }

  &.text__large div {
    padding-right: 20%;
    > p {
      padding-right: 0;
    }
  }

  &.right div {
    width: 100%;
    padding-left: 150px;
  }
  & > img {
    width: auto;
    height: 400px;
    float: right;
    object-fit: cover;
  }

  & > .blockOne,
  .blockTwo {
    width: 220px;
    height: 220px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 70px;
    &.width__100 {
      width: 100% !important;
    }

    &.text__large div {
      padding-right: 20%;
    }

    &.right div {
      width: 100%;
      margin-left: 0;
      height: 260px;
      padding-left: 0;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
export const ContainerLeft = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  &.right .padding__right__none {
    justify-content: right;
    padding-right: 0;
    padding-left: 40%;
  }

  & > div {
    padding-right: 15%;
    padding-left: 40%;
  }
  @media screen and (max-width: 768px) {
    width: 100% !important;
    order: 2;
    transform: translate(0, 0) !important;
    &.withImg {
      height: 326px;
      z-index: 0;
    }
    & img {
      height: 100%;
    }
  }
`;
export const ContainerFullWidth = styled.div`
  width: 100%;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0;
  }
  @media screen and (max-width: 768px) {
    height: 200px !important;
  }
`;

export const Services = styled.div`
  background: var(--color-dark);
  color: #fff;
  /* padding: 80px; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  & > :nth-child(1),
  > :nth-child(2) {
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    width: 100vw;
    margin-left: -40px;
    & > :first-child {
      margin-top: 0 !important;
    }
  }
`;

export const ServiceName = styled.h3`
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 900;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ListService = styled.ul`
  list-style: none;
  opacity: 1 !important;

`;
export const ListItem = styled.li`
  color: #4c4a57;
  font-size: 0.9rem;
  width: 250px;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 420px;
  /* transform: translateX(50%); */
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContainerImageBig = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: 0 !important;
  padding-right: 0 !important;
  opacity: 0;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const ContainerClients = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  background: var(--color-dark);
  box-sizing: border-box;
  color: #fff;
  padding: 20vh 30vh;

  & .title__customTwo {
    width: 500px;
  }

  @media screen and (max-width: 768px) {
    padding: 5vh 4vh;

    & .title__customTwo {
      width: 270px;
    }
  }
`;

export const ContainerClient = styled.div`
  width: 165px;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 20px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
