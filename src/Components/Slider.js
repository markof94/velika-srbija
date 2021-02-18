import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InputRange from 'react-input-range'

const Container = styled.div`
    width: calc(100% - 50px);
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    
`;

const Component = (props) => {
    const [value, setValue] = useState(780);

    useEffect(() => {
        props.setYear(value);
    }, [value])

    return (
        <Container>
            <InputRange
                maxValue={2021}
                minValue={780}
                value={value}
                onChange={val => setValue(val)}
            />
        </Container>
    )
}

export default Component;