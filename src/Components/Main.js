import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import View from './View'
import DarkGradient from './DarkGradient'
import Modal from './Modal'

const Container = styled.div`
    width: 100%;
    max-width: 100vmin;
    height: 100vh;
    padding-bottom: 24px;
    margin: 0 auto;
    
    display: flex;
    align-items: flex-end;
    
    background-image: url(https://www.freeworldmaps.net/europe/balkan-peninsula/balkan-peninsula-outline-map.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Main = () => {

    const [year, setYear] = useState(780);
    const [modalSrc, setModalSrc] = useState('')

    useEffect(() => {

    }, []);

    return (
        <Container>
            <div style={{ zIndex: `1` }}>
                <View
                    year={year}
                    setModalSrc={setModalSrc}
                />

                <Slider
                    setYear={(y) => setYear(y)}
                />
            </div>

            <DarkGradient />

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