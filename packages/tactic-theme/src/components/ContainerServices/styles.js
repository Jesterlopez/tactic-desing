import styled from 'styled-components'

export const ContainerParallax = styled.div`
  transform: translateY(0%);

  @media screen and (max-width: 768px) {
    width: 100vw !important;
    margin-bottom: 100px;
    /* transform: translateY(0%); */
    transform: translate(0px, 0px) !important;
  }
`

export const ContainerService = styled.div`
  opacity: 0;
  transform: translateX(85%) translateY(0);
  background: var(--color-dark);
  color: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  box-sizing: border-box;
  & > :nth-child(1),
  > :nth-child(2) {
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    width: 100vw;
    margin-left: -40px;
    transform: translateX(73%) translateY(0);

    grid-template-columns: inherit;
    grid-template-rows: inherit;

    & > :first-child {
      margin-top: 0 !important;
    }
  }
`

export const ServiceItem = styled.div`
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-shadow: inset 0px 1px 44px -7px rgba(0,0,0,0.46);

  & > h3 {
    font-size: 2rem;
    transition: .3s ease-in font-size, .3s ease-in top, .3s ease-in width;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  }

  & > p {
    opacity: 0;
    transition: ease-in-out top .3s, ease-in-out opacity .3s;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: center;
  }
  
  &:hover {
    background: #18b489;  
    opacity: 0.8;
        
    & > h3 {
      font-size: 1.5rem;
      top: 25%;
      width: 75%;
    }

    & > p {
      top: 65%;
      opacity: 1;
    }
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 390px;
  }
`

export const ServiceName = styled.h3`
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 900;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

export const ListService = styled.ul`
  list-style: none;
`

export const ListItem = styled.li`
  color: #4c4a57;
  font-size: 0.9rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`
