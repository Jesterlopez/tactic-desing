import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
:root{
    --color-primary: #FF5851;
    --color-secundary: #f8f8f8;
    --color-dark: #1c1b20;
    --color-yeloow: #f3c130;
    --color-blue: #414a6b;
    --color-gray:#d8d8e8;
    --color-gray2:#b49a85;
}
.margin__bottom__end {
  margin-bottom: 200px;
}

.height100{
  height: 100vh;
  width: 100vw;
}

.text__italic{
    font-family: "Libre Baskerville", serif;
    font-style: italic;
}
.font__italic{
    font-family: "Libre Baskerville", serif;
    font-size: 1.1rem;
    font-style: italic;
    font-weight: 300;
}
.font__italic__paragraph{
    font-family: "Libre Baskerville", serif;
    font-size: .7rem;
    font-style: italic;
    font-weight: 300;
}
.font__phar{
    font-family: "Gilroy Light", sans-serif;
    font-size: 3.2rem;
}
.font__titles{
    font-family: "Gilroy Bold", sans-serif;
    font-size: 4.7rem;
}
.font__bold{
    font-family: "Gilroy Bold", sans-serif;
}
.text__drink{
    color: var(--color-primary);
}
.text__white{
    color: var(--color-secundary);
}
.text_dark{
    color: var(--color-dark);
}

*{
    padding: 0;
    margin: 0;
}
body{
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
    background: #f8f8f8;
}

body.menuOpen{
  overflow: hidden;
}

.menuOpen #navbarMenu{
    transform: translateX(0%) !important;
    left: 40px;
    right: 20%; 
}
.menu__hover #navbarMenu{
  transform: translateX(-95%);

}
.menuOpen .menu__color{
  opacity: 0.95;
}
.menuOpen .borders > * {
  transform: scale(2);
}

.menuOpen .brand{
  transform: translate(calc(16vw - 60px), 100%);
}
.menuOpen .langToggle{
  transform: translate(-40px, 40px);
}
.menuOpen #menu__toggle {
  transform: translateX(60px);
  width: 20px;
  z-index: 15;
  margin-left:0;
}
.menuOpen .iconMenu::before {
  transform: rotate(90deg);
  width: 20px;
  float: right;
  clear: right;
  height: 2px;
  background: #1c1b20;
  margin: 0;
}

.menuOpen .iconMenu {
  width: 20px !important;
  margin-top: -2px;
  transform: rotate(-45deg);
}
.menuOpen .iconMenu::after {
  display: none;
}
.menuOpen .iconMenuText{
    display: none;
}
.menuOpen .socialMedia__header {
  right: 30px;
}
.padding__custom {
  padding: 20vh 165px 20vh 20%;
}

.text__primary,
.text__secundary {
  font-family: "Gilroy Bold", sans-serif;
}

.text__primary {
  font-size: 1.5rem;
  overflow: hidden;
}
.text__primary strong {
  display: inline-block;
  transition: transform 1s cubic-bezier(0.7, 0, 0.3, 1);
}
.text__secundary {
  font-size: 1.5rem;
}
.text__secundary strong {
  display: inline-block;
}
.text__secundary span {
  display: block;
  overflow: hidden;
}
.expanded__height{
  height: 200vh !important;
}
.padding__bottom__none{
  padding-bottom: 0;
}
`;
