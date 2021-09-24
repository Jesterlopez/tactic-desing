import React, { useEffect, useRef } from 'react'
import { connect } from 'frontity'
import {
  Container,
  Title,
  FormContainer,
  // Form,
  // Submit,
  Content
  // Input
} from './styles'

import { IconToggleCloseContact } from '../Icons'

const ContactPopup = ({ state, className, libraries }) => {
  const formContact = useRef(null)
  const data = state.source.get('/contactanos')
  const contactForm = state.source.page[data.id]
  const Html2React = libraries.html2react.Component

  useEffect(() => {
    const btnClose = document.getElementById('btnClose')
    const html = document.getElementsByTagName('html')[0]
    btnClose.addEventListener('click', () => {
      formContact.current.classList.add('hidden')
      if (html.classList.contains('overflowContact')) {
        html.classList.remove('overflowContact')
      }
    })
  }, [])
  return (
    <>
      <Container
        ref={formContact}
        id="formContact"
        className={className || 'hidden'}
      >
        <IconToggleCloseContact />

        <div className="container__content fadeInUp fadeObserve">
          <Title>Contáctanos</Title>

          <FormContainer>
            <Html2React html={contactForm.content.rendered} />
          </FormContainer>
          <Content>
            En soumettant ce formulaire, j’accepte que l’adresse mail saisie
            soit exploitée par Wokine, uniquement dans le cadre de mon
            inscription à la newsletter. Pour connaître et exercer vos droits,
            notamment de retrait de votre consentement à l’utilisation des
            données collectées, veuillez consulter notre politique de
            confidentialité
          </Content>
        </div>
      </Container>
    </>
  )
}

export default connect(ContactPopup)
