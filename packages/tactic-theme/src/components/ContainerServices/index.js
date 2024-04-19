import React, { useRef, useEffect, useCallback } from 'react'
import { connect } from 'frontity'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// import ServiceItem from '../ServiceItem'
import {
  ContainerService,
  ContainerParallax,
  ServiceItem
} from './styles'

gsap.registerPlugin(ScrollTrigger)

const ContainerServices = ({ state }) => {
  const containerServiceRef = useRef(null)

  const initScrollAnimation = useCallback(() => {
    gsap.to(containerServiceRef.current, {
      scrollTrigger: {
        trigger: !containerServiceRef.current,
        start: 'center 20%',
        scrub: true
      },
      yPercent: -100,
      duration: 0.8,
      stagger: {
        from: 'center',
        amount: 0.9
      }
    })
  }, [])

  useEffect(() => {
    initScrollAnimation()
  }, [initScrollAnimation])

  return (
    <ContainerParallax
      id="parallax"
      className="Box container__right"
      ref={containerServiceRef}
    >
      <ContainerService className="container__services fadeObserve slideLeft">
        <ServiceItem>
          <h3>BRAND CREATION</h3>
          <p>We help you create your brand from zero or enhance what you
already have. We will deliver a full brand book for your digital presence.</p>
        </ServiceItem>
        <ServiceItem>
          <h3>SOCIAL MEDIA MANAGEMENT</h3>
          <p>Engage your audience with relevant content and designs
that capture the eye.</p>
        </ServiceItem>
        <ServiceItem>
          <h3>DIGITAL ADVERTISING (PPC)</h3>
          <p>We will create campaigns aligned with your objectives
such as driving traffic to your website or social media channels, brand awareness or
getting clients through your door.</p>
        </ServiceItem>
        <ServiceItem>
          <h3>WEBSITE DEVELOPMENT AND SEO</h3>
          <p>A compelling website is your business's digital
handshake, creating that crucial first impression and setting the stage for meaningful
customer interactions. The compass that guides customers to your website is good SEO.
Keep your website relevant and updated to boost your visibility.</p>
        </ServiceItem>
          {/* <ServiceName>Inbound Marketing</ServiceName>
          <ListService>
            <ListItem>Atraer</ListItem>
            <ListItem>Convertir</ListItem>
            <ListItem>Cerrar</ListItem>
            <ListItem>Fidelizar</ListItem>
          </ListService> */}
      </ContainerService>
    </ContainerParallax>
  )
}

export default connect(ContainerServices)
