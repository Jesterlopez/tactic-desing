import styled from "styled-components";
export const ContainerService = styled.div`
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
