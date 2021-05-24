import { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from{
        opacity: 0;
        
    }
    to{
        opacity: 1;
    }
`;
export const fadeOutUp = keyframes`
    from{
        opacity: 1;
        
    }
    to{
        opacity: 0;
    }
`;

export const fadeInScroll = keyframes`
from{
opacity: 1;
transform: translateY(100px) rotate(-90deg);

}
to{
  transform: translateY(0) rotate(-90deg);
  opacity: 1;
}
`;

export const slideLeft = keyframes`
    from{
        transform: translateX(600px);
    }
    to{
        transform: translateX(0);
    }
    
`;

export const slideInRightInitial = keyframes`
 from{
       width: 100%;
    }
    to{
        width: 0;
    }

`;

export const fadeOut = keyframes`
  0%{
  transform: translateY(0) rotate(-90deg);
  opacity: 1;
  }
  100%{
    transform: translateY(100px) rotate(-90deg);
  opacity: 0;
  }
`;

export const fadeInUp = keyframes`
    from{
        opacity: 0;
        transform: translateY(150px);
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }
`;
export const fadeInDown = keyframes`
    from{
        opacity: 1;
        transform: translateY(0);
    }
    to{
        opacity: 0;
        transform: translateY(100px);
    }
`;
export const fadeInLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-40px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
    
`;
export const fadeInRight = keyframes`
    from{
        transform: translate(110%, '');
    }
    to{
        transform: translate(0%, '');
    }
    
`;
export const fadeOutLeft = keyframes`
    from{
        opacity: 1;
        transform: translateX(0);
    }
    to{
        opacity: 0;
        transform: translateX(-40px);
    }
    
`;
export const slideInRight = keyframes`
    from{
       width: 100%;
    }
    to{
        width: 0;
    }
    
`;
export const slideOutRight = keyframes`
    from{
       width: 0;
    }
    to{
        width: 100%;

    }
    
`;

export const slideDown = keyframes`
    from{
       height: 0;
    }
    to{
        height: 200px;

    }
`;

export const HLeftMove = keyframes`
   0% {
     stroke-dashoffset: 124px;
   }
   5% {
     stroke-dashoffset: 0px;
   }
   100% {
    stroke-dashoffset: 0px;
}
`;

export const HMidMove = keyframes`

    0% {
     stroke-dashoffset: 37px;
    }   
    5% {
    stroke-dashoffset: 37px;
   }
   10% {
     stroke-dashoffset: 0px;
   }   
   100% {
     stroke-dashoffset: 0px;   }
`;

export const HRightMove = keyframes`
  0% {
    stroke-dashoffset: 124px;
  }
  5% {
    stroke-dashoffset: 124px;
  }
  10% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
`;

export const ELeftMove = keyframes`
  0% {
    stroke-dashoffset: 124px;
  }
  2% {
    stroke-dashoffset: 124px;
  }
  6% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
`;
export const ETopMove = keyframes`
  0% {
    stroke-dashoffset: 47px;
  }
  6% {
    stroke-dashoffset: 47px;
  }
  11% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }

`;
export const EMidMove = keyframes`
 0% {
    stroke-dashoffset: 42px;
  }
  8% {
    stroke-dashoffset: 42px;
  }
  13% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }

`;
export const EBottomMove = keyframes`
0% {
    stroke-dashoffset: 47px;
  }
  11% {
    stroke-dashoffset: 47px;
  }
  16% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }

`;
export const LOneLongMove = keyframes`
0% {
    stroke-dashoffset: 124px;
  }
  2% {
    stroke-dashoffset: 124px;
  }
  7% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }

`;
export const LOneShortMove = keyframes`
0% {
    stroke-dashoffset: 44px;
  }
  13% {
    stroke-dashoffset: 44px;
  }
  18% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }

`;
export const LTwoLongMove = keyframes`
 0% {
    stroke-dashoffset: 124px;
  }
  3% {
    stroke-dashoffset: 124px;
  }
  8% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }

`;
export const LTwoShortMove = keyframes`
0% {
    stroke-dashoffset: 44px;
  }
  15% {
    stroke-dashoffset: 44px;
  }
  20% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }

`;
export const OMove = keyframes`
 0% {
    stroke-dashoffset: 302px;
  }
  4% {
    stroke-dashoffset: 302px;
  }
  9% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
`;
export const RedDotMove = keyframes`
0% {
    stroke-width: 0px;
  }
  15% {
    stroke-width: 0px;
  }
  20% {
    stroke-width: 44px;
  }
  100% {
    stroke-width: 44px;
  }
`;

export const BounceArrow = keyframes`

0%{
transform: translateX(-5px)
}
100%{
transform: translateX(-15px);
}

`;
