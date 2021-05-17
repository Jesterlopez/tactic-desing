import React from "react";
import { connect } from "frontity";
import Loader from "react-loader-spinner";
const Preloader = () => {
  return (
    <Loader
      type="Rings"
      color="#00BFFF"
      height={"100vh"}
      width={120}
      style={{
        // background: "#FF5851",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      // timeout={1000} //3 secs
    />
  );
};
export default connect(Preloader);
