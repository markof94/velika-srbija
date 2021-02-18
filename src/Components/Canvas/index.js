import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import draw from './draw';
import preload from './preload'
import setup from './setup';
import { touchStarted, keyPressed, touchEnded, mousePressed, mouseReleased } from './controls'
import Spinner from '../Spinner'
import p5 from 'p5/lib/p5'

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: fade-in 0.5s ease;
    z-index: 0;
    user-drag: none;
`;

const Loader = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const sketch = p => {
    p.draw = null;

    p.preload = () => { preload(p) }
    p.setup = () => { setup(p) }
    p.draw = () => { draw(p) }
    //p.touchStarted = () => { touchStarted(p) }
    //p.touchEnded = () => { touchEnded(p) }
    //p.mousePressed = () => { mousePressed(p) }
    //p.mouseReleased = () => { mouseReleased(p) }
    //p.keyPressed = () => { keyPressed(p) }
}

let p = null;

const initCanvas = () => {
    p = new p5(sketch, 'p5game');

}

const removeCanvas = () => {
    if (p) {
        p.remove();
        p = window.setup = window.draw = null;
    } else {
        const canv = document.querySelector('canvas');
        canv && canv.remove();
    }
}

const Component = (props) => {
    useEffect(() => {
        initCanvas();

        return (() => {
            removeCanvas();
        })
    }, [])

    useEffect(() => {
        if (p) {
            p.year = props.year;
            p.shouldDraw = true;
        }
    }, [props.year])

    return (
        <Container>
            <div id={'p5game'} />
            <Loader id={"p5_loading"}><Spinner /> </Loader>
        </Container>
    )
}

export { p };
export default Component;