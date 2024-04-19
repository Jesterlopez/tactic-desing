/* eslint-disable no-empty */
import React, { useEffect, useState } from 'react'
import { connect } from 'frontity'
import { Anchor, AnchorSpan, Mask, NameLink } from './styles'
import { contactClose } from '../../utils/formPopup'

const NavLink = ({ href, children, actions, state, className, background, action }) => {
  const newState = state.theme.isActive
  // compruebo el estado del menubar, si esta abierto o no
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    // si el menu esta abierto remuevo la clase para cerrarlo al darle click en algun enlace / pagina
    document.body.classList.remove('menuOpen', isOpen)
    const html = document.getElementsByTagName('html')[0]
    if (document.body.classList.contains('menuOpen')) {
    } else {
      html.classList.remove('overflow')
    }
  }, [isOpen])

  return (

    href
      ? <Anchor
      href={href}
      onClick={(e) => {
        e.preventDefault()
        // seteo lo contrario del estado actual del menu, si esta abierto(true) pasa a false o Cerrado
        setIsOpen(!isOpen)
        // actuliza el estado del menu globalmente
        actions.theme.setToggleMenu(!newState)
        // fija la ruta que se le pasa por href del tag
        actions.router.set(href)
      }}
      className={className}
    >
      <Mask className="mask">
        <NameLink background={background}>{children}</NameLink>
      </Mask>
    </Anchor>
      : <AnchorSpan
    className={className}
    onClick={(e) => {
      e.preventDefault()
      if (action === 'open-popup') {
        contactClose(actions, 'contact-us')
      }
    }}
  >
    <Mask className="mask">
      <NameLink background={background}>{children}</NameLink>
    </Mask>
  </AnchorSpan>
  )
}

export default connect(NavLink)
