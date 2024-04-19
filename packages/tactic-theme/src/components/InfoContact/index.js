import React, { useEffect, useRef } from 'react'
import { connect } from 'frontity'
import { IconArrowRight } from '../Icons'

import { AnchorEmail, AnchorNewsletter } from './styles'
import fxScrollFooter from '../../utils/fxScrollFooter'

const InfoContact = ({ actions }) => {
  const btn = useRef(null)
  const emailRef = useRef(null)

  const contactClose = (e) => {
    e.preventDefault()
    actions.theme.setFormPopup('subscribe')
    
    const html = document.getElementsByTagName('html')[0]
    const form = document.getElementById('popup')

    if (form) form.classList.add('animation')
    if ( !html.classList.contains('overflowContact') ) {
      html.classList.add('overflowContact')
    }

    form.classList.remove('hidden')
  }

  const scrollCustom = () => {
    fxScrollFooter(emailRef)
    fxScrollFooter(btn)
  }

  useEffect(() => {
    btn.current.addEventListener('click', contactClose)
    window.addEventListener('scroll', scrollCustom)

    return () => {
      removeEventListener('click', contactClose)
      removeEventListener('scroll', scrollCustom)
    }
  }, [])

  return (
    <>
      <AnchorEmail
        href="#"
        className="send__email fadeInUp"
        id="send__email"
        ref={emailRef}
      >
        <IconArrowRight />
        <span className="text__italic">
          Meet our partners program
        </span>
        <span className="font__bold">Partners</span>
      </AnchorEmail>
      <AnchorNewsletter
        href="#"
        ref={btn}
        id="suscribe"
        className="fadeInUp suscribe"
      >
        <span className="text__italic">Click to subscribe!</span>
        <span className="font__bold">Subscribe.</span>
      </AnchorNewsletter>
    </>
  )
}

export default connect(InfoContact)
