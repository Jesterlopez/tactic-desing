import React from "react";
import { connect } from "frontity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

import { ListSocialMedia } from "./styles";

const SocialMedia = () => {

  return (
    <ListSocialMedia className="socialMedia__header">
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
    </ListSocialMedia>
  );
};
export default connect(SocialMedia);
