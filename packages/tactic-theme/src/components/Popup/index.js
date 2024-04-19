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

const Popup = ({ state, className, libraries, content }) => {
  const popupContainerRef = useRef(null)
  // const b2bForm = state.source.get('/b2b-form')
  // const contactUs = state.source.get('/contact-us')
  // const affiliateForm = state.source.get('/affiliate-page')
  // const subscribe = state.source.get('/subscribe')
  const form = state.source.get(`/${content}`)

  const Html2React = libraries.html2react.Component

  useEffect(() => {
    const btnClose = document.getElementById('btnClose')
    const html = document.getElementsByTagName('html')[0]

    btnClose.addEventListener('click', () => {
      popupContainerRef.current.classList.add('hidden')

      if (html.classList.contains('overflowContact')) {
        html.classList.remove('overflowContact')
      }
    })
  }, [])

  return (
    <>
      <Container
        ref={popupContainerRef}
        id="popup"
        className={className || 'hidden'}
      >
        <IconToggleCloseContact />

        <div className="container__content fadeInUp fadeObserve">
          <Title>{state.source.page[form.id]?.title?.rendered} </Title>
          <FormContainer>
            <Html2React html={state.source.page[form.id]?.content?.rendered} />
          </FormContainer>
        </div>
      </Container>
    </>
  )
}

export default connect(Popup)
