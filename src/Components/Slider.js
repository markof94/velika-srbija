import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Slider } from '@material-ui/core';
import data from '../Data/serbia.json'
import { withStyles, makeStyles } from '@material-ui/core/styles';

const Container = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    padding: 0 24px;
    pointer-events: auto;
`;

const PrettoSlider = withStyles({
    root: {
      color: 'rgba(255, 0, 0, 0.5)',
      height: 8,
      
      
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
      boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
      fontFamily: `Cuprum`
    },
    track: {
      height: 8,
      borderRadius: 4,
      boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`
    },
    rail: {
      height: 8,
      borderRadius: 4,
      boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`
    },
  })(Slider);


const Component = (props) => {
    const [value, setValue] = useState(780);

    useEffect(() => {

    }, [])

    useEffect(() => {
        props.setYear(value);
    }, [value])

    return (
        <Container>
            <PrettoSlider
                value={value}
                step={1}
                valueLabelDisplay="on"
                max={2021}
                min={780}
                onChange={(e, val) => setValue(val)}
            />
        </Container>
    )
}

export default Component;