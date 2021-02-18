import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import View from './View'
import Modal from './Modal'
import Canvas from './Canvas'

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 100vmin;
    height: 100vh;
    margin: 0 auto;
    
    display: flex;
    align-items: flex-end;
`;

const Wrapper = styled.div`
    z-index: 1;
    background: rgba(0, 0, 0, 0.75);
    pointer-events: none;
    padding-top: 24px;
    background: linear-gradient(0, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0) 100%);
`;

const Main = () => {

    const [year, setYear] = useState(780);
    const [modalSrc, setModalSrc] = useState('')

    useEffect(() => {

    }, []);

    return (
        <Container>

            <Canvas
                year={year}
            />

            <Wrapper>
                <View
                    year={year}
                    setModalSrc={setModalSrc}
                />

                <Slider
                    setYear={(y) => setYear(y)}
                />
            </Wrapper>

            {modalSrc !== "" &&
                <Modal
                    onClose={() => setModalSrc(``)}
                    src={modalSrc}
                />
            }
        </Container>
    )
}

export default Main;