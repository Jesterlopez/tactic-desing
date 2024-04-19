import styled from 'styled-components'

export const Toggle = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  transition: transform 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
  position: fixed;
  z-index: 1000;
  top: 20px;
  right: 40px;
  &#desktop {
  }
  &#mobile {
    display: none;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    left: -60px;
    margin: 40px 0;
    top: 0;
    &#mobile {
      display: flex;
    }
  }
  & li {
    margin: 0 5px;
    font-size: 12px;
    & a {
      text-decoration: none;
      color: #1c1b20;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`

export const CTA = styled.button`
  position: fixed;
  z-index: 1000;
  top: 0;
  height: 40px;
  right: 100px;
  border: none;
  text-transform: uppercase;
  background: var(--color-primary);
  color: #fff;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.7rem;
  transition: background 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms, right 500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;

  @media screen and (max-width: 767px) {
    top: inherit;
    bottom: 15px;
    right: 5px;
    padding: 20px 10px;
    height: auto;
  }

  &#mobile {
    display: none;
  }

  &:hover {
    background: var(--color-dark);
  }
`
