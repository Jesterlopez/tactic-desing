import styled from "styled-components";
export const ContainerParallax = styled.div`
  transform: translateY(25%);

  @media screen and (max-width: 768px) {
    width: 100vw !important;
    /* transform: translateY(0%); */
    transform: translate(0px, 0px) !important;
  }
`;
export const ContainerService = styled.div`
  transform: translateX(100%);
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
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 900;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ListService = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  color: #4c4a57;
  font-size: 0.9rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;
