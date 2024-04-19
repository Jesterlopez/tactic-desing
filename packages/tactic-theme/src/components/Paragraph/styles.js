import styled from 'styled-components'

export const ContainerParagraph = styled.div`
  padding: 20vh 165px 20vh 20%;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  z-index: 1;
  right: ${props => props.side === 'right' ? '0' : 'inherit'};
  left: ${props => props.side === 'left' ? '0' : 'inherit'};
  /* transition: 0.2s transform ease; */
`

export const Quote = styled.span`
  margin-bottom: 25px;
  display: inline-flex;
`

export const RefQuote = styled.span`
  /*margin-left: 10px;*/
  background: #ff5851;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.3, 1);
`

export const ParagraphContent = styled.div`
  line-height: 1.2;

  & .text__primary,
  .text__secundary {
    font-size: 1.5rem;
  }
`
