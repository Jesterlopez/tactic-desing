import styled from "styled-components";

export const AnimeIcon = styled.div`
  [data-aos="animeIcon"] {
    width: 100%;
  }
  [data-aos="animeIcon"].aos-animate {
    width: 0%;
  }
`;

export const FadeRight = styled.div`
  [data-aos="fade-right"] {
    transform: translate3d(-20px, 0, 0) !important;
  }
  [data-aos="fade-right"].aos-animate {
    transform: translate3d(0, 0, 0) !important;
  }
`;
