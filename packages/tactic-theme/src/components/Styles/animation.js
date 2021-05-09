import { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const fadeInUp = keyframes`
    from{
        opacity: 0;
        transform: translateY(100px);
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
