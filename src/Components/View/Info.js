import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Portrait from './Portrait'
import LegendState from './LegendState'

const Container = styled.div`
    
    bottom: 0;
    width: 100vmin;
    color: #FFFFFF;
   
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
        font-size: 20px;
    }
`;

const Title = styled(Name)`
    font-size: 26px;
    font-weight: normal;

    @media(max-width: 720px){
        font-size: 16px;
    }
`;

const Year = styled(Name)`
    font-size: 32px;
    font-weight: normal;

    @media(max-width: 720px){
        font-size: 26px;
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
        setModalSrc
    } = props;

    return (
        <Container>
            <Legend>
                {entry.states.map((state, i) => {
                    return (
                        <LegendState
                            key={i}
                            state={state}
                        />
                    )
                })}
            </Legend>

            <Bottom>
                <Section>
                    <Portrait
                        src={entry.image}
                        onClick={() => setModalSrc(entry.wiki)}
                        hasWiki={entry.wiki && entry.wiki !== ""}
                    />
                    <SubSection
                        style={{ marginLeft: `14px` }}
                    >
                        <div>
                            <Title>
                                {entry.title}
                            </Title>

                            <Name
                                style={{
                                    marginBottom: `10px`
                                }}
                            >
                                {entry.name}
                            </Name>
                        </div>
                        <Year>
                            {`${year}.`}
                        </Year>
                    </SubSection>
                </Section>


                <Section>
                    <SubSection
                        style={{ textAlign: `center`, justifyContent: `flex-end` }}
                    >
                        <Title
                            style={{ marginBottom: `8px` }}
                        >
                            {`Zastava`}
                        </Title>

                        <Portrait
                            src={entry.flag}
                            horizontal
                        />
                    </SubSection>
                </Section>
            </Bottom>

        </Container>
    )
}

export default Component;