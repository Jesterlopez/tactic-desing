import React from 'react'
import { connect } from 'frontity'
import Paragraph from '../Paragraph'
import { ScrollDown } from '../ScrollDown'
import ColorHeader from '../ColorHeader'

import { HeaderContainer, HeaderRight, ContainerFullWidth } from './styles'
import TitleHeader from '../TitleHeader'

const HeroPageAnimated = ({ state }) => {
  const dataPage = state.source.page[51]
  
  return (
      <HeaderContainer id="header">
        <ColorHeader element="servicios" className="slideInRightHome animation" />
        <ScrollDown />
        <HeaderRight className="header__animation" />
        {typeof dataPage === 'undefined'
          ? null
          : (
              <Paragraph
                side="right"
                fraseUp="You have good idea?"
                fraseMid="we have a good team."
                nextSection="#content-body"
              />
            )}
        <ContainerFullWidth id="containerHello">
          <TitleHeader
            className="fadeInUp animation text-white"
            fontSize="mid"
            textUp="serv"
            textDown="ices"
          />
          {/* <HelloComponent /> */}
        </ContainerFullWidth>
      </HeaderContainer>
  )
}

export default connect(HeroPageAnimated)
