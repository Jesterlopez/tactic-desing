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
  width: 75%;
  height: 100%;
  background: var(--color-yellow);

  @media screen and (max-width: 768px) {
    height: 340px;
    width: 100%;
    position: absolute;
    top: 50vh;
  }
`;

export const HeaderContent = styled.p`
  width: 37%;
  font-size: 1.9rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  font-weight: 900;
  font-family: "Poppins", sans-serif;
  top: 35%;
  right: 15%;
  line-height: 1.3;
  color: #fff;
  & p {
    color: var(--color-dark);
    margin-bottom: 30px;
  }
  & > span {
    display: block;
  }

  & span:last-child {
    color: var(--color-dark);
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 1.2rem;
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
      padding-top: 30px;
      padding-bottom: 30px;
    }
    & .content__italic {
      font-size: 1rem;
      line-height: 1.2;
      font-style: normal;
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

export const HeadBlockContent = styled.p`
  margin-bottom: 40px;
  color: var(--color-dark);

  @media screen and (max-width: 768px) {
    padding-left: 0 !important;
    margin-bottom: 0;
  }
`;
export const BodyContent = styled.p`
  margin-bottom: 40px;
  font-size: 0.9rem;
  line-height: 1.3rem;
  box-sizing: border-box;
  color: #606060;
  &.padding__left__20 {
    padding-left: 20%;
  }
  > p {
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
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ListService = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  color: #4c4a57;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 420px;

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

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
