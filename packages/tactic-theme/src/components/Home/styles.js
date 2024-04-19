import styled from 'styled-components'

export const ContainerContent = styled.div`
  &#content {
    width: 100vw;
    min-height: 100vh;
    /* margin-bottom: 200px; */
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
  .react-parallax {
    width: 100%;
    & .react-parallax-content {
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    img.react-parallax-bgimage {
      transform: translateY(0) translateX(-50%) !important;
    }
    .react-parallax-background-children {
      transform: translateY(0) translateX(-50%) !important;
    }
  }
`

export const ContainerImage = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-left: -26%;

  & > .slideDown {
    height: 0;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0%;
  }
`

export const ContentSection = styled.section`
  width: 100vw;
  background: #f8f8f8;
  padding: 20vh 0 20vh 20%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  & div.parallax__none {
    opacity: 0;
  }

  & div.container__fullWidth {
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: relative;
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
    width: 30%;
  }
  & div.container__left {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  & div.container__right {
    display: flex;
    width: 61%;
    height: 650px;
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
    & .container__fullWidth {
     
    }
    & .padding__left__none {
      padding-left: 0 !important;
    }
    & > div.image {
      width: 100%;
    }
    & .image.container__fullWidth {
      margin-left: -40px;
      margin-right: -40px;
      width: 100vw;
      height: 0;
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
    & div.container__right {
      width: 100vw;
    }
  }
`

export const HeadBlockContent = styled.div`
  margin-bottom: 40px;
  color: var(--color-dark);
`
export const BodyContent = styled.div`
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
  p, h3 {
    margin-bottom: 10px;
  }
  ul {
    margin-left: 30px;
  }
  a {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`
