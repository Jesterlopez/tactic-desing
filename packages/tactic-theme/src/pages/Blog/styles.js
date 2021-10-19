import styled from "styled-components";

export const ContainerHeader = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  background: #f8f8f8;
  position: relative;
  padding: 0 15vh;

  & .scroll__custom {
    transform: translateY(-200%) rotate(-90deg);
  }

  & .padding__top {
    padding-top: 15vh;
  }
  & .padding__top .noFade {
    transform: translate(0) !important;
  }

  @media screen and (max-width: 768px) {
    height: 90vh;
    padding: 0 5vh;
    flex-wrap: wrap;
    & .padding__top {
      padding-top: 0;
    }
  }
`;

export const ContainerLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;
export const ContainerRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    position: relative;
    height: 50%;
    width: 90%;
    & .margin__top__paragraph {
      margin-top: 15%;
    }

    & .padding__mobile {
      padding-left: 0 !important;
    }
  }
`;

export const HeadBlockContent = styled.div`
  &.animate {
    opacity: 0;
  }
  /* opacity: 0; */
`;

export const BodyContent = styled.div`
  & p {
    margin-top: 40px;
    font-size: 0.85rem;
    line-height: 1.4rem;
    color: #606060;
  }
`;

export const ContainerBlogs = styled.section`
  width: 100%;
  height: auto;
  /* min-height: 100vh; */
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  /* padding: 5vh 0; */
  box-sizing: border-box;

  & div {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
  }
/* 
  & .infinite-scroll-component__outerdiv {
    width: 33.3%;

    & .infinite-scroll-component{
      width: 100%;
    }
  } */
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

  @media screen and (max-width: 768px) {
    padding: 5vh 4vh;
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
export const MessageInfo = styled.div`
  width: 100%;
  text-align: center;
  padding: 5% 5%;
  background: #f8f8f8;
`;

export const ContainerCategories = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: left;
    padding: 20px 10px;
`
