import styled from "styled-components";

export const Item = styled.li`
  & > a:hover > span > span::before {
    transform: scaleX(1) translateY(-50%);
  }
`;
