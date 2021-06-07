import styled from "styled-components";

export const ContainerClient = styled.div`
  width: 165px;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 20px;
  overflow: hidden;

  & img {
    width: 80%;
    height: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 155px;
    height: 135px;
  }
`;
export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
