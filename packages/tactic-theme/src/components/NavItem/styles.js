import styled from "styled-components";

export const Item = styled.li`
  & > :where(a, span, button):hover > span > span::before {
    transform: scaleX(1) translateY(-50%);
  }
  & > :where(a, span, button).page__active > span > span::before {
    transform: scaleX(1) translateY(-50%);
  }
  & .mask {
    transform: translateY(100px);
    transition: transform 800ms cubic-bezier(1, 0, 0, 1);
  }
  &.animation .mask {
    transform: translateY(0);
  }
`;
