import React from "react";
import { connect } from "frontity";
import Link from "./Link";

const Header = () => {
  return (
    <>
      <Link href="/">Inicio</Link>
      <Link href="/servicios">Servicios</Link>
    </>
  );
};

export default connect(Header);
