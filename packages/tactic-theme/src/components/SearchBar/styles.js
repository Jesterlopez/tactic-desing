import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%auto;
  justify-content: flex-end;
  height: 100px;
  align-items: center;
  z-index: 0;
  position: relative;
  background: #f8f8f8;

  @media screen and (max-width: 768px) {
    /* margin-bottom: 40px; */
  }
`;

export const InputSearch = styled.input`
  background: transparent;
  height: 40px;
  border: none;
  border-bottom: 1px solid #606060;
  color: #fff;
  width: 30%;
  font-size: 1.2rem;
  color: #1c1b20;
  padding: 0 0px;
  margin-right: 20px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    width: 100%;
    margin: 0 10%;
    font-size: 1.2rem;
    height: 35px;
  }
`;
