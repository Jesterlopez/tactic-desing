import React from "react";
import { connect } from "frontity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import { ListSocialMedia } from "./styles";

const SocialMedia = () => {
  return (
    <ListSocialMedia>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
      </li>
    </ListSocialMedia>
  );
};
export default connect(SocialMedia);
