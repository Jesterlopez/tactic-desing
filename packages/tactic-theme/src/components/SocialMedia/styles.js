import styled from "styled-components";

export const ListSocialMedia = styled.ul`
  display: flex;
  text-align: center;
  flex-direction: column;
  list-style: none;
  font-size: 0.8rem;

  position: fixed;
  z-index: 1000;
  top: 50%;
  right: 10px;
  z-index: 500;
  transform: translateY(-50%);
  & > li {
    padding: 4px;
    & > a {
      text-decoration: none;
      color: #1c1b20;
      text-transform: uppercase;
    }
  }
`;
