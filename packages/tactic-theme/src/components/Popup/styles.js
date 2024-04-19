import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: 25;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 0 8%;
  box-sizing: border-box;
  /* transform: translateY(100%);
  transition: 1s all; */
  &.hidden {
    display: none;
  }
  & .container__content {
    width: 84%;
    height: 250px;
    position: absolute;
    top: 5%;
    margin-bottom: 2rem;
  }
`
export const Title = styled.h1`
  font-size: 4rem;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`
export const Form = styled.form`
  width: 100%;
  position: relative;
`

export const FormContainer = styled.div`
  width: 100%;
  position: relative;

  & .error-message, .success-message{
    font-family: 'Libre Baskerville', serif;
    border: none;
    font-style: italic;
    padding-left: 0;
    font-size: 1.1rem;
  }

  & .wpcf7-form{
    width: 100%;
    position: relative;

    & p{
      display: flex;
      align-items: center;
    }

    & label {
      font-family: 'Libre Baskerville', serif;
      font-style: italic;
      color: #868686;
    }
    
    & .wpcf7-text.wpcf7-email, & .wpcf7-form-control{
      background: transparent;
      width: 100%;
      height: 30px;
      border: none;
      border-bottom: 1px solid #606060;
      font-size: 1.8rem;
      color: #fff;
      font-family: 'Libre Baskerville', serif;
      font-style: italic;
      margin-bottom: 10px;

      &:focus {
        outline: none;
        box-shadow: none;
      }

      &::placeholder {
        color: transparent;
      }
      
      & ~ span {
          font-style: italic;
          font-family: 'Libre Baskerville', serif;
          margin-top: 10px;
      }
    }

    & .wpcf7-textarea {
      height: 100px;
      max-width: 590px;
      min-width: 100%;
    }

    & .wpcf7-response-output{
      margin-top: 10px;
    }

  & .email-contact{
    width: 100%;
  }

  & .submit {
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    & #submitContact.wpcf7-submit, & #submit-contactform, & #submit-affiliateform, & #submit-b2bform {
      /* position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      bottom: 0; */
      text-decoration: none;
      background: 0;
      padding: 0;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.5rem;
      cursor: pointer;
      width: auto;
      margin-right: 1rem;
      
      &:hover ~ svg{
        transform: rotate(0) scale(1.6);
        fill: var(--color-primary);
      }
    }
    
    & svg{
      transform: rotate(42deg) scale(1.5);
      transition: transform 240ms cubic-bezier(0.56, 0, 0.265, 1);
      fill: #fff;
      z-index: -1;
    }

  }




    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

`

export const Submit = styled.a`
  position: absolute;
  text-decoration: none;
  bottom: 0;
  right: 0;
  background: 0;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
`
export const Content = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
  color: #606060;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`
export const Input = styled.input`
  background: transparent;
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #606060;
  font-size: 2.8rem;
  color: #fff;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`
