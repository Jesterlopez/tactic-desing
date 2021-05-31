import styled from "styled-components";
export const Container = styled.div`
  padding: 40px 40px 0 40px;
  box-sizing: border-box;
  margin-bottom: 30vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 60vh;
  }
`;
export const ContainerBlog = styled.div`
  padding: 10% 6% 0;
  box-sizing: border-box;
  margin-bottom: 30vh;
  z-index: 16;
  background: #f8f8f8;
  /* color: ${(props) => props.color}; */
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 60vh;
  }
`;
