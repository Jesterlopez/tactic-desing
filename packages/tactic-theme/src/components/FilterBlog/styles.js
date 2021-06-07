import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 2% 15%;
  & a.tags {
    padding: 10px 20px;
    border: 1px solid #000;
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    margin: 0 10px 0 0;
    &:hover {
      text-decoration: underline;
    }
  }
`;
