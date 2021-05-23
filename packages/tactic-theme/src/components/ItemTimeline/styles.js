import styled from "styled-components";

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const TitleItem = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 2.1rem;
  font-weight: 900;
  &:first-child {
    margin-bottom: 10px;
  }
  & > span {
    display: block;
    text-transform: capitalize;
  }

  & > span:last-child {
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 0.8;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    font-weight: 700;
    & > span:last-child {
      font-size: 1.5rem;
    }
  }
`;

export const ContentItem = styled.p`
  margin-top: 40px;
  font-size: 0.9rem;
  color: #a8a8a8;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
