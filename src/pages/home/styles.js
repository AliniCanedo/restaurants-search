import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
`;

export const Logo = styled.img`
    margin-bottom: 15px;
`
export const Map = styled.div`
    background-color: purple;
    width: 50%
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`