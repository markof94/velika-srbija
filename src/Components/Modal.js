import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'
import CloseIcon from '@material-ui/icons/Close'

const Container = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    z-index: 10;
    animation: fade-in 0.5s ease;
    background: rgba(0, 0, 0, 0.75);

    ${props => props.isClosing && `
        animation: fade-out 0.25s ease both;
    `}
`;

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    max-width: 100vmin;
    height: 75%;
    animation: slide-in-bottom 0.5s 0.25s ease both;
    background: black;
    border-radius: 30px 30px 0 0;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

    ${props => props.isClosing && `
        animation: slide-out-bottom 0.25s ease both;
    `}

    transform: translateX(-50%);
`;

const Modal = styled.iframe`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 30px 30px 0 0;
    border: 0;
`;

const CloseButton = styled.div`
    position: absolute;
    height: 30px;
    width: 100%;
    top: -45px;
    padding-right: 15px;
    text-align: right;
    cursor: pointer;
   
    svg{
        font-size: 32px;
        color: #FFFFFF;
    }
`;


const Component = (props) => {
    const [isClosing, setIsClosing] = useState(false);

    const startClosing = () => {
        setIsClosing(true);
    }

    return (
        <Container
            onClick={startClosing}
            onAnimationEnd={() => {
                if (isClosing) {
                    props.onClose();
                }
            }}
            isClosing={isClosing}
        >
            <Wrapper
                onClick={(e) => { e.stopPropagation() }}
                isClosing={isClosing}
            >
                <Spinner

                />
                {
                    <Modal
                        src={props.src}
                    />
                }

                <CloseButton
                    onClick={startClosing}
                >
                    <CloseIcon />
                </CloseButton>
            </Wrapper>
        </Container>
    )
}

export default Component;