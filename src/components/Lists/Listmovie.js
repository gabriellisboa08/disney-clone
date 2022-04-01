import styled from 'styled-components';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

const ListMovie = ({ title, items }) => {
    const [scrollList, setScrollList] = useState(0);

    const hendleArrowLeft = () => {
        let marginLeft = scrollList + Math.round(window.innerHeight / 2);
        if (marginLeft > 0) {
            marginLeft = 0;
        }
        setScrollList(marginLeft);
    };

    const hendleArrowRight = () => {
        let marginLeft = scrollList - Math.round(window.innerHeight / 2);

        let listW = items.length * 350;
        if (window.innerWidth - listW - 100 > marginLeft) {
            marginLeft = window.innerWidth - listW;
        }
        setScrollList(marginLeft);
    };

    return (
        <ContainerList>
            <h2>{title}</h2>
            <ContainerMoviesList style={{ marginLeft: scrollList }}>
                <ContainerArrow
                    onClick={hendleArrowLeft}
                    style={{
                        left: 'calc( 0 - 3.5vw + 24px)',
                        marginLeft: 'calc( 0 - 3.5vw + 24px)',
                    }}
                >
                    <ArrowBackIosIcon
                        style={{
                            fontSize: 45,
                        }}
                    />
                </ContainerArrow>

                <ContainerArrowRight onClick={hendleArrowRight}>
                    <ArrowForwardIosIcon
                        style={{
                            fontSize: 45,
                        }}
                    />
                </ContainerArrowRight>

                {items != null &&
                    items.map((item, index) => (
                        <ItemContainer key={index}>
                            <Item>
                                <div>
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                                    ></img>
                                </div>
                            </Item>
                        </ItemContainer>
                    ))}
            </ContainerMoviesList>
        </ContainerList>
    );
};

const ContainerList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    width: calc(100vw - calc(3.5vw + 24px));

    & h2 {
        font-size: 20px;
    }
`;

const ContainerMoviesList = styled.div`
    min-height: 240px;
    display: flex;
    overflow: visible;
    transition: all 0.5s;
    width: auto + (+3.5vw + 24px);
`;

const ContainerArrow = styled.div`
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: absolute;
    height: 95%;
    margin-left: calc(-3.5vw - 24px);
    left: 20px;
    z-index: 2;
    opacity: 0;
    transition: 0.2s;
    :hover {
        cursor: pointer;
        opacity: 1;
    }
`;
const ContainerArrowRight = styled.div`
    width: calc(3.5vw + 24px);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: absolute;
    height: 85%;
    overflow-y: hidden;
    right: 20px;
    opacity: 0;
    z-index: 2;
    transition: 0.2s;
    :hover {
        cursor: pointer;
        opacity: 1;
    }
`;

const ItemContainer = styled.div`
    width: 345px;
    min-width: 345px;
    color: white;

    border-radius: 6px;
`;

const Item = styled.div`
    transform: scale(0.93);
    position: relative;
    background-size: contain;
    margin: auto;
    margin-top: 10px;
    transition: 0.4s;
    border-radius: 6px;

    img {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        width: 100%;
        border-radius: 10px;
        border: solid 3px transparent;
    }
    :hover {
        transform: scale(1);
    }

    &:hover {
        cursor: pointer;
        img {
            border: solid 3px rgba(205, 204, 205, 1);
        }
    }
`;

export default ListMovie;
