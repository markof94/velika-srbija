import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuBookIcon from '@material-ui/icons/MenuBook'

const Container = styled.div`
    position: relative;
    width: 120px;
    height: 150px;
    pointer-events: auto;
    border-radius: 4px;

    background-color: rgba(230, 230, 230, 0.75);
    
    -webkit-tap-highlight-color: transparent;
    -webkit-filter: drop-shadow(0 3px 6px rgba(0,0,0,0.23));

    @media(max-width: 720px){
        width: 80px;
        height: 100px;
    }

    ${props => props.cursorPointer && `
        cursor: pointer;
    `}

    ${props => props.noBackground && `
        background-color: transparent;
    `}
`;

const Portrait = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    user-drag: none;
`;

const SeeMoreLabel = styled.div`
    position: absolute;
    left: 4px;
    bottom: 4px;
    
    background: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
    color: #422f26;
    padding: 2px 8px;
    text-decoration: underline;

    transition: all 0.2s ease;

    user-select: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    svg{
        font-size: 24px;
        transition: all 0.2s ease;
    }

    @media(max-width: 720px){
        svg{
            font-size: 18px;
        }
    }

    &:hover{
        background: rgba(255, 255, 255, 1);
    }

    ${props => !props.hasImage && `
        left: 50%;
        bottom: 50%;

        transform: translate(-50%, 50%);

        svg{
            font-size: 44px;
        }

        @media(max-width: 720px){
            svg{
                font-size: 28px;
            }
        }
    `}
`;

const Component = (props) => {
    const { entry } = props;

    const hasWiki = entry && entry.wiki && entry.wiki !== "";
    const hasImage = props.src && props.src !== "";
    const alt = entry ? `${entry.title} ${entry.name}` : "istorija srbije";

    return (
        <Container
            noBackground={props.noBackground}
            onClick={props.onClick}
            cursorPointer={hasWiki}
        >
            {hasImage &&
                <Portrait
                    src={props.src}
                    alt={alt}
                />
            }
            {hasWiki &&
                <SeeMoreLabel
                    hasImage={hasImage}
                >
                    <MenuBookIcon />
                </SeeMoreLabel>
            }
        </Container>
    )
}

export default Component;