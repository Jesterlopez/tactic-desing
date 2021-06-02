import React, { useEffect, useRef } from "react";
import { connect } from "frontity";
import { Container, Title, Form, Submit, Content, Input } from "./styles";

import { IconArrowContact, IconToggleCloseContact } from "../Icons";

const ContactPopup = ({ state, className }) => {
  const formContact = useRef(null);

  useEffect(() => {
    const btnClose = document.getElementById("btnClose");
    const html = document.getElementsByTagName("html")[0];
    btnClose.addEventListener("click", () => {
      formContact.current.classList.add("hidden");
      if (html.classList.contains("overflowContact")) {
        html.classList.remove("overflowContact");
      }
    });
  }, []);
  return (
    <>
      <Container
        ref={formContact}
        id="formContact"
        className={className || "hidden"}
      >
        <IconToggleCloseContact />
        <div className="container__content fadeInUp fadeObserve">
          <Title>Contáctanos</Title>
          <Form>
            <Input className="text__italic" type="text" placeholder="Email" />
            <Submit>
              <IconArrowContact />
            </Submit>
          </Form>
          <Content>
            En soumettant ce formulaire, j’accepte que l’adresse mail saisie
            soit exploitée par Wokine, uniquement dans le cadre de mon
            inscription à la newsletter. Pour connaître et exercer vos droits,
            notamment de retrait de votre consentement à l’utilisation des
            données collectées, veuillez consulter notre politique de
            confidentialité
          </Content>
        </div>
      </Container>
    </>
  );
};

export default connect(ContactPopup);
