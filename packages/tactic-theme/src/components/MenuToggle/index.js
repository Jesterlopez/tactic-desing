import React, { useEffect, useRef } from 'react'
import { connect } from 'frontity'
import { Toggle, Icon, Text } from './styles'

const MenuToggle = ({ state, actions }) => {
  const toggleMenuRef = useRef(null)

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]
    html.classList.toggle('overflow', state.theme.isActive)
    document.body.classList.toggle('menuOpen', state.theme.isActive)
    const link = document.querySelectorAll('.link__menu')
    const sendMail = document.querySelector('#send__email')
    const suscribe = document.querySelector('#suscribe')

    if (state.theme.isActive) {
      setTimeout(() => {
        sendMail.classList.add('animation')
        suscribe.classList.add('animation')
      }, 100)

      link.forEach((e, i) => {
        e.classList.add('animation')
        e.style.animationDelay = `calc(${i + 2}00ms)`
      })
    } else {
      setTimeout(() => {
        sendMail.classList.remove('animation')
        suscribe.classList.remove('animation')
      }, 500)

      link.forEach((e) => {
        setTimeout(() => {
          e.classList.remove('animation')
        }, 500)
      })
    }
  }, [state.theme.isActive])
  return (
      <Toggle
        ref={toggleMenuRef}
        onClick={(e) => {
          e.preventDefault()
          const newState = state.theme.isActive
          actions.theme.setToggleMenu(!newState)
        }}
        onMouseEnter={() => document.body.classList.add('menu__hover')}
        onMouseLeave={() => document.body.classList.remove('menu__hover')}
        href="#"
        id="menu__toggle"
      >
        <Icon className="iconMenu"></Icon>
        <Text className="iconMenuText">
          <span>m</span>
          <span>e</span>
          <span>n</span>
          <span>u</span>
        </Text>
      </Toggle>
  )
}

export default connect(MenuToggle)
