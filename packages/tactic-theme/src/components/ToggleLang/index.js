import React from "react";
import { connect } from "frontity";
import { Toggle } from "./styles";

const ToggleLang = ({ media }) => {
  return (
    <>
      <Toggle className="langToggle" id={media}>
        <li>
          <a href="/es" className="link__active">
            es.
          </a>
        </li>
        <li>
          <a href="/en">en.</a>
        </li>
      </Toggle>
    </>
  );
};

export default connect(ToggleLang);
