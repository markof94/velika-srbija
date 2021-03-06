import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import data from '../../Data/serbia.json'
import Portrait from './Portrait'
import Info from './Info'


const Container = styled.div`
    width: 100vmin;
    padding: 16px 24px;
    padding-top: 32px;
    display: flex;
    pointer-events: none;
`;

const Component = (props) => {

    const [entry, setEntry] = useState(null);

    useEffect(() => {
        findEntry(props.year);
    }, [props.year]);

    const findEntry = (year) => {
        for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].startYear <= year) {
                setEntry(data[i]);
                break;
            }
        }
    }

    if (!entry) {
        return null;
    }

    return (
        <Container>
            <Info
                entry={entry}
                year={props.year}
                setModalSrc={props.setModalSrc}
                alphabet={props.alphabet}
            />
        </Container>
    )
}

export default Component;