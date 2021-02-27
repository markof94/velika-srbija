import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import View from './View'
import Modal from './Modal'
import Canvas from './Canvas'

const Container = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 100%;
    margin: 0 auto;
    
    display: flex;
    align-items: flex-end;
`;

const Wrapper = styled.div`
    z-index: 1;
    background: rgba(0, 0, 0, 0.75);
    pointer-events: none;
    padding-top: 24px;
    background: linear-gradient(0, rgba(0, 0, 0, 0.6) 10%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0) 100%);
    width: 100%;
    position: absolute;
    bottom: 0;
`;
const SubWrapper = styled.div`
    max-width: 100vmin;
    margin: 0 auto;

    @media(max-width: 720px){
        padding-bottom: 16px;
    }
`;

const AlphabetSelect = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
    font-size: 14px;
    color: #FFFFFF;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 4px 8px;
    user-select: none;
    min-width: 75px;
    -webkit-tap-highlight-color: transparent;
    text-align: center;

    &:hover{
        text-decoration: underline;
    }
`;

const Disclaimer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 4px;
    padding: 0 24px;
    width: 100vmin;
    text-align: center;
    user-select: none;

    
    color: rgba(255, 255, 255, 0.25);
    font-size: 12px;
    z-index: 2;

    @media(max-width: 720px){
        font-size: 11px;
    }
`;


const Year = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #FFFFFF;
    pointer-events: none;
    user-select: none;

    font-size: 72px;
    font-weight: normal;

    -webkit-filter: drop-shadow(0 3px 2px rgba(0,0,0,0.23));

    @media(max-width: 720px){
        font-size: 60px;
    }
`;

const Main = () => {
    const [year, setYear] = useState(780);
    const [modalSrc, setModalSrc] = useState('');
    const [alphabet, setAlphabet] = useState('cirilica');

    useEffect(() => {

    }, []);

    const toggleAlphabet = () => {
        if (alphabet === 'cirilica') {
            setAlphabet('latinica');
        } else {
            setAlphabet('cirilica');
        }
    }

    return (
        <Container>
            <Canvas
                year={year}
            />

            <Wrapper>
                <SubWrapper>
                    <View
                        year={year}
                        setModalSrc={setModalSrc}
                        alphabet={alphabet}
                    />

                    <Slider
                        setYear={(y) => setYear(y)}
                    />
                </SubWrapper>
            </Wrapper>

            <AlphabetSelect
                onClick={toggleAlphabet}
            >
                {alphabet === 'latinica' ? "Ћирилица" : "Latinica"}
            </AlphabetSelect>

            <Year>
                {`${year}.`}
            </Year>

            <Disclaimer>
                {alphabet === 'cirilica' ?
                    `Приказане границе су само информативног карактера и могу одступати од званично прихваћених граница.`
                    :
                    `Prikazane granice su samo informativnog karaktera i mogu odstupati od zvanično prihvaćenih granica.`}
            </Disclaimer>

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