import styled from "styled-components";

export const Service = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 44%;
  margin-top: 50px;
  & > i {
    margin-bottom: 12px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px !important;
    width: 100%;
  }
`;
