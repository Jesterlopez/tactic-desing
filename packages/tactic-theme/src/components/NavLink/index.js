import React, { useEffect, useState, useRef } from "react";
import { connect } from "frontity";
import { Anchor, Mask, NameLink } from "./styles";

const NavLink = ({ href, children, actions, state, className }) => {
  const data = state.source.get(state.router.link);
  // compruebo el estado del menubar, si esta abierto o no
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // si el menu esta abierto remuevo la clase para cerrarlo al darle click en algun enlace / pagina
    document.body.classList.remove("menuOpen", isOpen);
  }, [isOpen]);
  return (
    <Anchor
      href={href}
      onClick={(e) => {
        e.preventDefault();
        // seteo lo contrario del estado actual del menu, si esta abierto(true) pasa a false o Cerrado
        setIsOpen(!isOpen);
        actions.router.set(href);
      }}
      className={className}
    >
      <Mask>
        <NameLink>{children}</NameLink>
      </Mask>
    </Anchor>
  );
};

export default connect(NavLink);
