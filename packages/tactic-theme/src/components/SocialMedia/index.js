import React from 'react'
import { connect } from 'frontity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faTiktok
} from '@fortawesome/free-brands-svg-icons'

import { ListSocialMedia } from './styles'

const SocialMedia = () => {
  return (
    <ListSocialMedia className="socialMedia__header">
      <li>
        <a href="https://www.facebook.com/tacticdigitalni/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/tacticdigitalni/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href="https://ni.linkedin.com/company/tacticdigitalni">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@tacticdigital">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </li>
    </ListSocialMedia>
  )
}
export default connect(SocialMedia)
