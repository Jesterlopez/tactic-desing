import styled from 'styled-components'

export const Img = styled.img`
    min-height: 100vh;
    object-fit: inherit !important;
`

export const Content = styled.div`
    padding: 20px;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translate(-50%,-50%);
    z-index: 10;
    width: 50%;
    text-align: right;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.2rem;
    opacity: 0;
    transform: translateY(200px);

    @media screen and (max-width: 768px) {
        top: 20%;
        width: 70%;
    }

    & > p {
        margin-bottom: 1.5rem;
    }
`
