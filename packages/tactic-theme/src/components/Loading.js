import React from "react";
import { connect } from "frontity";
import Loader from "react-loader-spinner";
const Preloader = () => {
  return (
    <Loader
      type="Puff"
      color="#d8d8da"
      height={"100vh"}
      width={120}
      style={{
        background: "#FF5851",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
      }}
      // timeout={1000} //3 secs
    />
  );
};
export default connect(Preloader);
