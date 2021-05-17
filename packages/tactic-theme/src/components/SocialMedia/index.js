import React, { useEffect } from "react";
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
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   const social = document.querySelector(".socialMedia__header");
  //   if (window.scrollY <= 0) {
  //     social.style.marginTop = "20px";
  //     console.log(social);
  //   } else {
  //     social.style.marginTop = "0";
  //     console.log(social);
  //   }
  // };
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
