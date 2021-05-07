import styled from "styled-components";

export const ContainerContent = styled.div`
  &#content {
    width: 100vw;
    min-height: 100vh;
    margin-bottom: 200px;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 7;
  }
`;

export const ContentSection = styled.section`
  width: 100vw;
  background: #f8f8f8;
  padding: 20vh 165px 20vh 20%;
  display: flex;
  flex-wrap: wrap;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 25%;
  }
  & > div:nth-child(3) {
    display: flex;
    width: 75%;
  }
  & > div.image {
    width: 100%;
    height: 300px;
    margin-left: -20%;
    margin-top: -20vh;
    & > img {
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const HeadBlockContent = styled.p`
  margin-bottom: 40px;
`;
export const BodyContent = styled.p`
  margin-bottom: 40px;
  padding-right: 60px;
  font-size: 0.9rem;
  box-sizing: border-box;
  color: #606060;
`;

export const ContainerServices = styled.div`
  background: var(--color-dark);
  color: #fff;
  padding: 80px;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  box-sizing: border-box;
  & > :nth-child(1),
  > :nth-child(2) {
    margin-top: 0;
  }
`;

export const ServiceName = styled.h3`
  margin-bottom: 20px;
`;

export const ListService = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  color: #4c4a57;
`;
