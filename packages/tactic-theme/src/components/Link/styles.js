import styled from "styled-components";

export const Link = styled.a`
  font-family: "Gilroy Bold", sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  text-decoration: none;
  color: var(--color-dark);
  line-height: 1.5;
  position: relative;
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
    background: var(--color-primary);
    opacity: 0.5;
    z-index: -1;
    transform-origin: left center;
    transform: scaleX(0) translateY(-50%);
    transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
  }
`;
