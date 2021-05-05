import styled from "styled-components";

export const Item = styled.li`
  &:hover > span > span {
    transform: scaleX(1) translateY(-50%);
  }
`;
