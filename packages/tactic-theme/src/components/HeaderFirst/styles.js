import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  background: var(--color-primary);
  position: relative;
  height: 110vh;
  width: 100vw;
  overflow: hidden;
  &.expanded__height .header__animation {
    transform: translateX(100%);
  }
  &.expanded__height #hello {
    transform: translateX(200%);
  }
  @media screen and (max-width: 768px) {
    height: 115vh;
    &.expanded__height #hello {
      position: absolute;
      top: 30%;
      transform: translateX(75%);
    }
  }
`

export const HeaderRight = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: var(--color-secundary);
  transition: all 1000ms cubic-bezier(0.7, 0, 0.3, 1) 50ms;
  transform: translateX(0%);
`

export const ContainerFullWidth = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 7;
  display: flex;
  align-items: center;
  justify-content: center;
`
