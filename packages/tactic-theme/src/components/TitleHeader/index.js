import React from "react";
import { connect, styled } from "frontity";
import { H1 } from "./styles";
import TitleSection from "../TitleSection";
import { IconWaveQuote } from "../../components/Icons";

const TitleHeader = ({ state, textUp, textDown, className }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <H1>
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
