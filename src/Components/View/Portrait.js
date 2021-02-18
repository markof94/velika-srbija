import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 120px;
    height: 150px;
    pointer-events: auto;

    background-image: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #F1F1F1;
    border-radius: 4px;
    -webkit-tap-highlight-color: transparent;

    @media(max-width: 720px){
        width: 80px;
        height: 100px;
    }

    ${props => props.horizontal && `
       width: 120px;
       height: 80px;
       border-radius: 2px;

        @media(max-width: 720px){
            width: 60px;
            height: 40px;
        }
    `}

    ${props => props.cursorPointer && `
        cursor: pointer;
    `}
`;

const SeeMoreLabel = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 8px 0 4px 0;
    color: #FFFFFF;
    padding: 3px 10px;
    text-decoration: underline;

    user-select: none;

    @media(max-width: 720px){
        font-size: 10px;
    }
`;

const Component = (props) => {

    return (
        <Container
            src={props.src}
            horizontal={props.horizontal}
            onClick={props.onClick}
            cursorPointer={props.hasWiki}
        >
            {props.hasWiki &&
                <SeeMoreLabel>
                    {"Još informacija"}
                </SeeMoreLabel>
            }
        </Container>
    )
}

export default Component;