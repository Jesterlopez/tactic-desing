import styled from "styled-components";

export const Anchor = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1.7rem;
  font-weight: 800;
  text-decoration: none;
  color: var(--color-dark);
  line-height: 1.5;
  position: relative;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Mask = styled.span`
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
  padding: 0px;
  line-height: 1.3;
`;

export const NameLink = styled.span`
  letter-spacing: -1px;
  padding: 0 10px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0px;
    right: 0px;
    height: 15px;
    background: ${(props) => props.background};
    /* background: var(--color-primary); */

    opacity: 0.5;
    z-index: -1;
    transform-origin: left center;
    transform: scaleX(0) translateY(-50%);
    transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
  }
`;
