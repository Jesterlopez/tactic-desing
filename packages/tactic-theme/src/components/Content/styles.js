import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 200px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 7;
  }
`;
