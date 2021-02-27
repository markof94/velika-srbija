import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import colors from '../../Data/colors.json'

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

`;

const Color = styled.div`
    border-radius: 4px;
    width: 32px;
    height: 32px;
    background-color: ${props => props.color};

`;

const Label = styled.div`
    color: #FFFFFF;
    font-size: 26px;
    font-weight: normal;
    margin-left: 8px;

    @media(max-width: 720px){
        font-size: 16px;
    }
`;


const getColor = (colorName = "serbia") => {
    const foundColor = colors.filter(c => c.name === colorName)[0];
    return foundColor ? foundColor.color : "rgba(255, 0, 0, 0.5)";
}

const Component = (props) => {

    const { state, alphabet } = props;

    return (
        <Container>
            <Color
                color={getColor(state.color)}
            />
            <Label>
                {alphabet === 'cirilica' && state.nameCir ? state.nameCir : state.name}
            </Label>
        </Container>
    )
}

export default Component;