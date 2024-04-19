import React, { useRef, useEffect } from 'react'
import { connect } from 'frontity'

import { ContainerContact } from './styles'
import fxScrollFooter from '../../utils/fxScrollFooter'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = ({ state }) => {
  const contactRef = useRef(null)

  const scrollCustom = () => fxScrollFooter(contactRef)

  useEffect(() => {
    window.addEventListener('scroll', scrollCustom)

    return () => {
      removeEventListener('scroll', scrollCustom)
    }
  }, [])

  return (

    <>

      <ContainerContact id="contact" className="fadeInUp" ref={contactRef}>
        <span
          className="contact__address"
        >
          Houston, Texas.
        </span>
        <span
          className="contact__address"
        >
          Miami, Florida.
        </span>
        <a
          className="contact__address"
          href="https://goo.gl/maps/Pryy8sjYrQ2uqNVj6"
        >
          Managua, Nicaragua.
        </a>
        <a className="contact__phone" href="tel:214-699-6124">
          <FontAwesomeIcon icon={faPhoneAlt} /> US: 214 699 6124
        </a>
        <a className="contact__phone" href="tel:50558656859">
          <FontAwesomeIcon icon={faPhoneAlt} /> Nicaragua: (505) 5865-6859
        </a>
        <a className="contact__email" href="mailto:jester.lopez@tactic-center.com">
        <FontAwesomeIcon icon={faEnvelope} /> info@tactic-center.com
        </a>
      </ContainerContact>

    </>
  )
}
export default connect(Contact)
