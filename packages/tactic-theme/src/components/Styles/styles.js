import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap');
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400i');

:root{
    --color-primary: #FF5851;
    --color-secundary: #f8f8f8;
    --color-dark: #1c1b20;
    --color-yeloow: #f3c130;
    --color-blue: #414a6b;
    --color-gray:#d8d8e8;
    --color-gray2:#b49a85;
}

@font-face{
  font-family: "Gilroy Bold";
  src: url('../fonts/Gilroy-ExtraBold.otf');
}
@font-face{
    font-family: "Gilroy Light";
    src: url('../fonts/Gilroy-Light.otf');
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
`;
