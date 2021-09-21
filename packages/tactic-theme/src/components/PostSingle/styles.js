import styled from "styled-components";

export const BrandImg = styled.img`
  height: 100%;
  width: 120px;
  object-fit: contain;
  padding: 3px;
  box-sizing: border-box;
  /* background: #3cd; */
  @media screen and (max-width: 768px) {
    top: 30px;
    left: 0px;
    position: absolute;
  }
`;

export const ContainerHeader = styled.div`
  width: 100vw;
  min-height: 90vh;
  position: relative;
  margin-left: -7%;
  margin-top: -12%;
  padding: 20%;
  padding-bottom: 10%;
  padding-top: 15%;
  flex-wrap: wrap;
  box-sizing: border-box;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  @media screen and (max-width: 768px) {
    margin-left: 0;
    padding: 10%;
    padding-top: 70%;
    min-height: auto;
  }
`;

export const Category = styled.p`
  font-size: 1.5rem;
  width: 100%;
  margin-bottom: 5%;
  opacity: 0;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10%;
  }
`;
export const TitleBlog = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  overflow: hidden;
  line-height: 1.2;
  font-family: "Poppins", sans-serif;
  width: 100%;
  display: block;
  opacity: 0;
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 2%;
  }
`;

export const IntroBlog = styled.h1`
  margin-bottom: 2%;
  font-size: 2.5rem;
  font-weight: 900;
  overflow: hidden;
  line-height: 1.2;
  font-family: "Poppins", sans-serif;
  width: 100%;
  display: block;
  opacity: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10%;
  }
`;
export const HeaderContent = styled.div`
  margin-top: 5%;
  width: 240px;
  & p:first-child {
    font-size: 0.8rem;
  }
  & p {
    width: 100%;
  }
  & p:last-child {
    margin-top: 20px;
    font-size: 0.7rem;
    line-height: 1.8;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 0 15%;
  }
`;
export const InfoBlog = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  opacity: 0;

  & :first-child {
    font-family: "Poppins", sans-serif;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  & :last-child {
    color: #fff;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    width: 65%;
    font-size: 0.8rem;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* padding-top: 20%; */

  & h3 {
    font-size: 2rem;
    font-weight: 900;
    overflow: hidden;
    line-height: 1.2;
    font-family: "Poppins", sans-serif;
    margin-bottom: 40px;
  }
  & h2 {
    line-height: 1.2;
    font-family: "Poppins", sans-serif;
    margin-bottom: 40px;
  }
  & h4 {
    line-height: 1.2;
    font-family: "Poppins", sans-serif;
    margin-bottom: 20px;
  }
  & h5 {
    line-height: 1.2;
    font-family: "Poppins", sans-serif;
    margin-bottom: 20px;
  }

  & p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: #888888;
    margin-bottom: 20px;
    /* display: flex;
    flex-wrap: wrap;
    padding: 0 10% 5%; */
  }
  & ul {
    padding-left: 20px;
    & li {
      font-size: 0.9rem;
      line-height: 1.5;
      color: #888888;
      margin-bottom: 20px;
    }
  }
  /* & figure.wp-block-image {
    width: 100%;
    height: 540px;
    position: relative;
    margin-bottom: 5%;
    & img {
      width: 100%;
      height: 100%;
    }
  } */

  @media screen and (max-width: 768px) {
    /* padding-top: 20%; */

    & h3 {
      font-size: 1.5rem;
    }

    & p {
      width: 100%;
      line-height: 1.8;
    }
    & ul li {
      width: 100%;
      line-height: 1.8;
    }
  }
`;

export const Button = styled.div`
  & .color__custom {
    font-size: 1.6rem;
    color: #fff;
    &::before {
      background: ${(props) => props.backgroundButton};
    }
    &::after {
      background: #fff;
    }
  }
`;

export const ImgFullWidthParallax = styled.div`
  width: 100vw;
  margin-left: -7%;
  height: 650px;
  position: relative;
  padding-bottom: 5%;

  @media screen and (max-width: 768px) {
    height: 350px;
    width: 100%;
    margin-left: 0;
    padding-bottom: 20%;
    & img {
      object-fit: cover;
    }
  }
`;

export const ImgFullWidth = styled.div`
  width: 100vw;
  margin-left: -7%;
  height: 540px;
  position: relative;
  &.padding__top {
    padding-top: 8%;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    margin-left: 0;
    padding-top: 10%;
  }
`;

export const ImgFullWidthContent = styled.div`
  width: 100vw;
  height: 540px;
  position: relative;
  margin-bottom: 5%;
  &.padding__bottom {
    padding-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 10%;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  overflow: hidden;
  line-height: 1.2;
  font-family: "Poppins", sans-serif;
  margin-bottom: 40px;
  &.margin__bottom {
    margin-bottom: 40px;
  }

  &.title__two {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    width: 100%;
    &.title__two {
      font-size: 1.5rem;
    }
  }
`;
export const Content = styled.p`
  /* margin-top: 40px; */
  font-size: 0.9rem;
  line-height: 1.5;
  color: #888888;
  /* width: 85%; */

  @media screen and (max-width: 768px) {
    width: 100%;
    line-height: 1.8;
  }
`;

export const ContainerRight = styled.div`
  width: 48%;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8% 5% 5%;
  box-sizing: border-box;
  flex-wrap: wrap;
  position: relative;
  &.container__img {
    padding: 8% 0 8%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10% 10% 10%;

    &.container__img {
      padding: 8% 10%;
    }
  }
`;
export const ContainerFullWidth = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10% 5%;
`;

export const ContainerMedia = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: inherit;
  right: inherit;
  /* right: 0; */
  background: #f8f8f8;
`;
export const ContainerLeft = styled.div`
  width: 48%;
  flex-wrap: wrap;
  align-content: center;
  display: flex;
  align-items: center;
  padding: 8% 5% 5% 10%;
  box-sizing: border-box;
  position: relative;
  &.container__img {
    padding: 8% 0 8%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0% 10% 0 10%;
    &.container__img {
      padding: 8% 10%;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Video = styled.video`
  width: 100%;
  height: 550px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const ImageTwo = styled.img`
  width: 100%;
  height: 550px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const ContainerFooter = styled.div`
  padding: 5% 10%;
  text-align: center;
  width: 100%;
  background: var(--color-dark);
  margin-left: -7%;
`;

export const Brand = styled.div`
  transition: transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  position: fixed;
  top: 6%;
  z-index: 1000;
  display: flex;
  padding: 0px;
  height: 40px;
  line-height: 40px;
  left: 6%;
  margin: 0px;
  color: inherit;
  white-space: nowrap;
  align-items: center;
  float: left;
  & .linkHome span > span {
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    width: 120px;
  }
  &.colorTwo {
    & .linkHome span > span {
      color: #000;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  @media screen and (max-width: 768px) {
    top: 1.8%;
    position: absolute;
  }
`;
