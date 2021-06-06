import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 120vh;
  position: relative;
  background: #f8f8f8;

  @media screen and (max-width: 768px) {
    height: auto;

    & h1 {
      font-size: 5.7rem;
      position: relative;
      margin-top: 50%;
    }
  }
`;
export const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 68%;
  display: flex;
  /* background: var(--color-dark); */

  @media screen and (max-width: 768px) {
    position: relative;
    display: flex;
    height: auto;
    flex-wrap: wrap;
    & img {
      width: 100%;
      height: auto;
      position: absolute;
      bottom: 0;
      &.header__img {
        position: relative;
        width: 100%;
      }
    }
  }
`;
export const ContainerImgHeader = styled.div`
  width: 50%;
  height: 100%;
  opacity: 0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* position: absolute;
    right: 0;
    bottom: 0; */
  }
  @media screen and (max-width: 768px) {
    width: 100%;

    & img {
      width: 100%;
      height: auto;
      position: absolute;
      bottom: 0;
      &.header__img {
        position: relative;
        width: 100%;
      }
    }
  }
`;
export const Content = styled.div`
  width: 50%;
  height: 100%;
  padding: 10% 5% 10% 15%;
  box-sizing: border-box;
  color: #fff;
  & div:nth-child(1) {
    opacity: 0;
  }
  &.custom {
    font-size: 0.9rem;
    line-height: 1.4;
    width: 60%;
    height: 40%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 450px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &.custom {
      font-size: 0.8rem;
      width: 100%;
      margin-bottom: 15%;
      height: auto;
    }
  }
`;
export const Title = styled.h2`
  margin-bottom: 15%;
  width: 80%;
  font-family: "Poppins", sans-serif;
  line-height: 1.2;
  font-size: 1.5rem;
  opacity: 0;
  &.mid {
    font-size: 1.2rem;
  }
  &.big {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 900;
  }
  & span {
    display: block;
    &.inline {
      display: inline;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 8%;
    &.center {
      margin: 0 auto 8%;
    }
  }
`;
export const ContentParagraph = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  &.colorGray {
    color: #606060;
    font-size: 0.8rem;
    line-height: 1.5;
  }
  & span {
    margin-top: 10%;
    width: 100%;
    display: block;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 8%;
  }
`;

export const Section = styled.section`
  width: 100%;
  min-height: 80vh;
  padding: 10% 10% 10% 20%;
  background: #f8f8f8;

  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
  &.dark {
    background: var(--color-dark);
  }
  &.center {
    padding: 10%;
  }

  &.heightFull {
    height: 100vh;
  }
  & .padding__none {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 10% 8% 20%;
    &.center {
      padding: 10% 40px;
    }
    &.heightFull {
      height: auto;
      min-height: 0;
    }
  }
`;
export const ColumnLeft = styled.div`
  width: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 90px;
    justify-content: center;
    display: flex;

    & img {
      width: 50%;
      height: 100%;
    }
  }
`;
export const ColumnCenter = styled.div`
  width: 33.3%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    margin: 10% 0%;

    & img {
      width: 90%;
      height: 100%;
    }
  }
`;
export const ColumnRight = styled.div`
  width: 28%;
  color: #fff;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0 5%;
    & h2 {
      width: 100%;
    }
  }
`;

export const ContainerLeft = styled.div`
  width: 33.3%;
  padding: 3%;
  box-sizing: border-box;
  opacity: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ContainerRight = styled.div`
  width: 33.3%;
  padding: 3%;
  box-sizing: border-box;
  opacity: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ContainerCenter = styled.div`
  width: 33.3%;
  padding: 3%;
  box-sizing: border-box;

  opacity: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Tag = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  margin-bottom: 10%;
`;

export const ContainerImgParallax = styled.div`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: 100%;
    background: #f8f8f8;
  }
`;

export const ContainerFullWidth = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: center;

  & i {
    height: 0;
  }
  & h2 {
    margin-bottom: 5%;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    text-align: center;

    &.left {
      text-align: left;
      margin: 8% 0 15% -5%;
    }
    & i {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 25%;
    }
    & h2 {
      margin-bottom: 0%;
      font-size: 1.9rem !important;
    }
  }
`;

export const Support = styled.a`
  background: var(--color-dark);
  width: 145px;
  height: 145px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 10px;
  opacity: 0;
  overflow: hidden;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const ContainerImg = styled.div`
  width: 20%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ContainerParagraph = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #414a6b;
  padding: 10% 5% 10% 10%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60%;
    padding: 25% 10% 15% 10%;
  }
`;
export const TitleItalic = styled.h2`
  color: #fff;
  margin-bottom: 8%;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 50%;
    font-size: 1.2rem;
    margin-bottom: 15%;
  }
`;
export const Link = styled.a`
  padding: 15px;
  width: 200px;
  position: relative;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  background: var(--color-dark);
  justify-content: space-between;
  font-size: 0.8rem;
  text-decoration: none;
  &:hover .arrow__hover {
    transform: translate(0%, 50%);
  }
  &:hover i {
    transform: translateX(150%);
    transform: translate(150%, -2px);
  }
  & div {
    width: 40px;
    overflow: hidden;
    /* display: inline-flex; */
    & .arrow__hover {
      transform: translate(-150%, 50%);
      & svg {
        transform: translate(2px, 2px);
      }
    }
    & i {
      position: relative;
      width: 28px;
      margin: 0 10px;
      transition: all 500ms cubic-bezier(1, 0, 0, 1) 0ms;
      transform: translate(0px, -2px);
      & .inner {
        background: #fff;
        transform: translateY(8px);
      }
      & svg {
        fill: #fff;
        transform: translate(2px, 4px);
      }
    }
  }
`;
