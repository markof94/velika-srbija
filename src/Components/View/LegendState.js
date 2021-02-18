import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

`;

const Color = styled.div`
    border-radius: 4px;
    border: 2px solid black;
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

const Component = (props) => {

    const { state } = props;

    return (
        <Container>
            <Color
                color={state.color}
            />
            <Label>
                {state.name}
            </Label>
        </Container>
    )
}

export default Component;