import styled from "styled-components";

export const Container = styled.div`
  width: 420px;
  height: 320px;
  display: flex;
  align-items: center;
  background: ${(props) => props.background};
  position: relative;
  overflow: hidden;

  & img {
    width: 60%;
  }
`;
