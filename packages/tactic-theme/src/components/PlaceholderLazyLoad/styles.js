import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
  width: 420px;
  height: 320px;
  display: flex;
  align-items: center;
  background: ${(props) => props.background};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 150px;
  }
`;
