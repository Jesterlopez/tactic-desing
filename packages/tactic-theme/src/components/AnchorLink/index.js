import React from 'react'
import { connect } from 'frontity'

import { Anchor } from './styles'

const AnchorLink = ({ href, children, className, actions }) => {
  return (
    <Anchor
      href={href}
      onClick={(e) => {
        e.preventDefault()
        actions.router.set(href)
      }}
      className={className}
    >
      {children}
    </Anchor>
  )
}

export default connect(AnchorLink)
