import styled from 'styled-components'

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Gilroy Light", sans-serif;
  /* margin: 40px 0; */
  & .font__bold {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 800;
  }
  & > * {
    font-size: 0.7rem;
    line-height: 1.6;
    color: #1c1b20;
    margin: 0px;
    font-weight: 500;
    text-decoration: none;
  }
  & > .contact__phone,
  .contact__email {
    font-weight: 900;
    font-size: 0.8rem;
    font-family: "Gilroy Bold", sans-serif;

    &:hover {
      text-decoration: underline;
    }
    /* & > svg {
      margin-left: -1rem;
    } */
  }
  @media screen and (max-width: 768px) {
    /* transform: translateY(0) !important; */
    order: 2;
    margin-top: auto;
    margin-bottom: 60px;
    width: 100%;

    & > .contact__address {
      line-height: 0.8rem;
    }
  }
`
