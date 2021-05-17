import styled from "styled-components";

export const ContainerContent = styled.div`
  &#content {
    width: 100vw;
    min-height: 100vh;
    margin-bottom: 200px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 7;
  }
  .react-parallax-background-children {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    img.react-parallax-bgimage {
      transform: translateY(0) translateX(-50%) !important;
    }
    .react-parallax-background-children {
      transform: translateY(0) translateX(-50%) !important;
    }
  }
`;

export const ContentSection = styled.section`
  width: 100vw;
  background: #f8f8f8;
  padding: 20vh 0 20vh 20%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  & div.container__fullWidth {
    display: flex;
    flex-direction: column;
    width: 100vw;
    & > div {
      display: flex;
      flex-wrap: wrap;
    }
    &.padding__top__80 {
      padding-top: 80px;
    }
  }
  & div.container__left.middle {
    display: flex;
    flex-direction: column;
    width: 25%;
  }
  & div.container__left {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  & div.container__right {
    display: flex;
    width: 70%;
  }
  & div.imagen__content {
    width: 50%;
    height: 300px;
    margin-left: -20%;
    padding-right: 5%;
    box-sizing: border-box;

    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      &.thumbnail__medium img {
        width: auto;
        height: 80% !important;
      }
      & > img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    & > .footer__image {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      & > .title__project,
      .category__project {
        display: block;
        width: 100%;
        text-align: right;
        line-height: 1.1rem;
      }
      & > .title__project {
        font-size: 0.8rem;
      }
      & > .category__project {
        font-size: 0.7rem;
        color: #606060;
      }
      & > a {
        font-size: 1rem;
        margin-top: 10px;
      }
    }
  }
  & > div.image {
    width: 100vw;
    height: 300px;
    margin-left: -20%;
    /* margin-top: -20vh; */
    & > img {
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 60px 40px;
    & > div.image {
      width: 100%;
    }
    & .image.container__fullWidth {
      margin-left: -40px;
      margin-right: -40px;
      width: 100vw;
      height: 200px;
    }
    & div.container__left {
      margin-bottom: 60px;
    }
    & div.container__left.imagen__content {
      order: 2;
      margin-left: -40px;
      margin-right: -40px;
      padding: 0;
      width: 100vw !important;
    }
    & .footer__image {
      margin: 20px -30px 0;
      & a {
        margin-top: 20px !important;
        font-size: 0.8rem !important;
      }
    }
  }
`;

export const HeadBlockContent = styled.p`
  margin-bottom: 40px;
  color: var(--color-dark);
`;
export const BodyContent = styled.p`
  margin-bottom: 40px;
  padding-right: 60px;
  font-size: 0.9rem;
  line-height: 1.3rem;
  box-sizing: border-box;
  color: #606060;
  > span {
    margin-top: 30px;
    display: block;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ContainerServices = styled.div`
  background: var(--color-dark);
  color: #fff;
  padding: 80px;
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
