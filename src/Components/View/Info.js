import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Portrait from './Portrait'
import LegendState from './LegendState'

const Container = styled.div`
    
    bottom: 0;
    width: 100vmin;
    color: #FFFFFF;
    -webkit-filter: drop-shadow(0 3px 2px rgba(0,0,0,0.23));
`;

const Legend = styled.div`

`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
`;

const Name = styled.div`
    font-size: 42px;
    font-weight: bold;

    @media(max-width: 720px){
        font-size: 26px;
    }

    @media(max-width: 330px){
        font-size: 18px;
    }
`;

const Title = styled(Name)`
    font-size: 26px;
    font-weight: normal;

    @media(max-width: 720px){
        font-size: 16px;
    }
`;

const Section = styled.div`
    display: flex;
`;

const SubSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
`;

const Component = (props) => {
    const {
        entry,
        year,
        setModalSrc,
        alphabet
    } = props;

    return (
        <Container>
            <Legend>
                {entry.states.map((state, i) => {
                    return (
                        <LegendState
                            key={i}
                            state={state}
                            alphabet={alphabet}
                        />
                    )
                })}
            </Legend>

            <Bottom>
                <Section>
                    <Portrait
                        onClick={() => setModalSrc(entry.wiki)}
                        src={entry.image}
                        entry={entry}
                    />
                    <SubSection
                        style={{ marginLeft: `14px` }}
                    >
                        <div>
                            <Title>
                                {alphabet === "cirilica" && entry.titleCir ? entry.titleCir : entry.title}
                            </Title>

                            <Name
                                style={{
                                    marginBottom: `10px`
                                }}
                            >
                                {alphabet === "cirilica" && entry.nameCir ? entry.nameCir : entry.name}
                            </Name>
                        </div>
                    </SubSection>
                </Section>


                <Section>
                    <SubSection
                        style={{ textAlign: `center`, justifyContent: `flex-end` }}
                    >
                        <Portrait
                            src={entry.flag}
                            noBackground
                        />
                    </SubSection>
                </Section>
            </Bottom>

        </Container>
    )
}

export default Component;