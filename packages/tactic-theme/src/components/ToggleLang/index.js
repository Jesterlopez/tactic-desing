import React from 'react'
import { connect } from 'frontity'
import { Toggle, CTA } from './styles'
import { contactClose } from '../../utils/formPopup'

const ToggleLang = ({ media, actions }) => {
  const openPopup = () => {
    contactClose(actions, 'contact-us')
  }
  return (
    <>
      <CTA onClick={openPopup} className="ctaHeader" id={media}>
        LET´S DO IT BETTER TOGETHER!
      </CTA>

      <Toggle className="langToggle" id={media}>
        <li>
          <a href="/en" className="link__active">en.</a>
        </li>
        <li>
          <a href="/es">
            es.
          </a>
        </li>
      </Toggle>
    </>
  )
}

export default connect(ToggleLang)
