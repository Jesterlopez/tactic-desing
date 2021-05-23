import styled from "styled-components";

export const TitleBlock = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  overflow: hidden;
  line-height: 1.2;
  font-family: "Poppins", sans-serif;
  width: 300px;
  display: block;
  &.title__low {
    font-size: 1.7rem;
    width: 200px;
  }
  &.title__custom {
    font-size: 2.8rem;
  }
  &.title__customTwo {
    font-size: 2rem;
  }
  & span {
    /* font-size: 3rem; */
    display: block;
  }
  & span:nth-child(2) {
    display: inline;
  }
  &.text__italic {
    font-size: 2.1rem;
  }
  &.title__center {
    width: 100%;
    margin: 80px 0;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 900;
    overflow: hidden;
    line-height: 1.2;
    font-family: "Poppins", sans-serif;
    display: block;
  }

  &.italic {
    font-family: "Libre Baskerville", serif;
    font-weight: 300;
    font-style: italic;
  }
  &.Bold {
    line-height: 1.2;
    font-weight: 900;
  }
  &.center__section {
    position: absolute;
    top: 5%;
    left: 30%;
    width: 49%;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    &.title__low {
      font-size: 1.5rem;
      width: auto;
    }
    &.title__custom {
      font-size: 2rem;
    }
    /* & span {
      font-size: 1.3rem;
    } */
    &.title__mobile span {
      font-size: 2.2rem;
    }
    &.text__italic {
      font-size: 1.5rem;
    }
    &.center__section {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2;
      transform: translateY(-50px);
    }
    .marginBottom__40 {
      margin-bottom: 40px;
    }
  }
`;
