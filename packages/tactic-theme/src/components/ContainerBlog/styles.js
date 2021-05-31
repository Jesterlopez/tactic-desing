import styled from "styled-components";

export const Container = styled.article`
  width: 420px;
  height: 320px;
  display: flex;
  align-items: center;
  background: #f8f8f8;
  position: relative;
  overflow: hidden;

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    text-decoration: none;
  }

  &:hover span {
    transform: translateY(0) skewY(0);
  }
  &:hover div {
    bottom: 30%;
  }
  &:hover h3:last-child {
    transform: translateY(0%);
  }
  &:hover img {
    transform: translateY(-5%);
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const TitleBlog = styled.h3`
  font-family: "Poppins", sans-serif;
  display: block;
  width: 100%;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1;
    margin-top: 10px;
  }
`;

export const IntroBlog = styled.h3`
  font-family: "Poppins", sans-serif;
  display: block;
  width: 80%;
  font-size: 1.5rem;
  transform: translateY(110%);
  transition: all 400ms cubic-bezier(0.7, 0, 0.3, 1) 100ms;
  color: #000;

  @media screen and (max-width: 768px) {
    transform: translateY(200%);
  }
`;

export const CategoryBlog = styled.p`
  display: block;
  font-size: 1.1rem;
`;

export const InfoBlog = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 9;
  color: #fff;
  transition: all 400ms cubic-bezier(0.7, 0, 0.3, 1) 100ms;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const Img = styled.img`
  filter: brightness(0.8);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition-delay: 1s;
  transition: transform 400ms cubic-bezier(0.7, 0, 0.3, 1) 100ms,
    opacity 800ms cubic-bezier(0.7, 0, 0.3, 1);
`;

export const Overlay = styled.span`
  width: 100%;
  height: 100%;
  background: ${(props) => props.background};
  /* opacity: 0.8; */
  position: absolute;
  top: 0;
  transform: translateY(200%) skewY(10deg);
  transition: transform 400ms cubic-bezier(0.7, 0, 0.3, 1) 50ms;
`;
