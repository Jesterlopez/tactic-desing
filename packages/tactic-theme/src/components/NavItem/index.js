import React from 'react'
import { connect } from 'frontity'

import NavLink from '../NavLink'
import { Item } from './styles'

const NavItem = () => {
  return (
    <>
      <div style={{ height: '90', overflow: 'hidden' }}>
        <Item className="fadeInUp fadeObserve link__menu">
          <NavLink background="blue" href="/services">
            Services
          </NavLink>
        </Item>
      </div>
      <div style={{ height: '90', overflow: 'hidden' }}>
        <Item className="fadeInUp fadeObserve link__menu">
          <NavLink background="yellow" href="/blog">
            Blog
          </NavLink>
        </Item>
      </div>
      <div style={{ height: '90', overflow: 'hidden' }}>
        <Item className="fadeInUp fadeObserve link__menu" id="open-popup">
          <NavLink options="home" background="red" action="open-popup">
            Contact
          </NavLink>
        </Item>
      </div>

    </>
  )
}

export default connect(NavItem)
