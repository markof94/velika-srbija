import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuBookIcon from '@material-ui/icons/MenuBook'

const Container = styled.div`
    position: relative;
    width: 120px;
    height: 150px;
    pointer-events: auto;
    border-radius: 4px;

    background-color: #F1F1F1;
    
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
    right: 4px;
    bottom: 4px;
    
    background: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    color: #FFFFFF;
    padding: 2px 8px;
    text-decoration: underline;

    user-select: none;

    svg{
        font-size: 24px;
    }

    @media(max-width: 720px){
        svg{
            font-size: 18px;
        }
    }
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
                <SeeMoreLabel>
                    <MenuBookIcon />
                </SeeMoreLabel>
            }
        </Container>
    )
}

export default Component;