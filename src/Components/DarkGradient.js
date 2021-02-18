import styled from 'styled-components'

const Gradient = styled.div`
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 50%;
    left: 0;
    bottom: 0;
    z-index: 0;

    background: linear-gradient(0, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0) 100%);
`;

export default Gradient;