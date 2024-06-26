import React from 'react'
import { connect } from 'frontity'
import { Service } from './styles'

import { IconWaveQuote, IconWaveQuoteLow } from '../Icons'

const ServiceItem = ({ children, className, key }) => {
  return (
    <Service key={key}>
      {className === 'NoAnimation'
        ? (
        <IconWaveQuoteLow color="#fff" />
          )
        : (
        <IconWaveQuote color="#FFF" />
          )}
      {children}
    </Service>
  )
}

export default connect(ServiceItem)
