import styled from "styled-components";

export const Container = styled.div`
  width:auto;
  height: auto;
    padding: 5px;
    margin: 10px 0;
  & a.category {
    padding: 10px 20px;
    border: 1px solid #000;
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    &:hover {
      text-decoration: underline;
    }
  }
`;
