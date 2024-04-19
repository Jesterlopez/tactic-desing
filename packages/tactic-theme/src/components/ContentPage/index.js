import React from 'react'
import { connect } from 'frontity'
import { Container, ContainerBlog } from './styles'

const ContentPage = ({ state, children, element }) => {
  if (element === 'blog') {
    return <ContainerBlog id="contentBlog">{children}</ContainerBlog>
  } else {
    return <Container id="contentGeneral">{children}</Container>
  }
}

export default connect(ContentPage)
