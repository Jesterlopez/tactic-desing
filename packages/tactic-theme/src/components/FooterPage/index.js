import React, { useRef, useEffect } from 'react'
import { connect } from 'frontity'
import InfoContact from '../InfoContact'
import Contact from '../Contact'
import { Footer, Credits } from './styles'
import fxScrollFooter from '../../utils/fxScrollFooter'
import Logo from '../../assets/tactic-digital.png'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const FooterPage = () => {
  const creditsRef = useRef(null)
  const footerRef = useRef(null)

  const scrollCustom = () => fxScrollFooter(creditsRef)

  useEffect(() => {
    window.addEventListener('scroll', scrollCustom)
  }, [])

  return (
    <>
      <Footer ref={footerRef} id="footer">
        <div className="padding__custom">
          <InfoContact />
          <Contact />
          <Credits
            id="credits"
            ref={creditsRef}
          >
            <a href="#" className="logo__company credit__link">
              <img
                src={Logo}
                alt="Logo Tactic Digital"
              />
              <span> ©Tactic Digital</span>
            </a>
            <a href="#" className="credit__link">
              Legal samples
            </a>
            <a href="#" className="credit__link">
              Our privacy policy
            </a>
          </Credits>
        </div>
      </Footer>
    </>
  )
}

export default connect(FooterPage)
