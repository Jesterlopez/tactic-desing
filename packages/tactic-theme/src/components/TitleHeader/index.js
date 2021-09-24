import React from "react";
import { connect } from "frontity";
import { H1 } from "./styles";
import { IconWaveQuote } from "../../components/Icons";

const TitleHeader = ({ state, textUp, textDown, className, fontSize }) => {
  return (
    <>
      <H1 className={fontSize}>
        <IconWaveQuote
          className="big"
          animation="slideInRightInitial animation"
        />
        <div>
          <span className={className}>{textUp}</span>
        </div>
        <div>
          <span className={className}>{textDown}.</span>
        </div>
      </H1>
    </>
  );
};

export default connect(TitleHeader);
