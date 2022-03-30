import styled from 'styled-components';
import { useEffect, useState } from 'react';

const ListMovie = ({ title, items }) => {
    // const element = document.querySelector('')

    return (
        <ContainerList>
            <h2>{title}</h2>
            <ContainerMoviesList>
                {items != null &&
                    items.map((item, index) => (
                        <ItemContainer key={index}>
                            <Item>
                                <div>
                                    <h2>{item.name}</h2>
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
    margin-top: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    width: calc(100vw - calc(3.5vw + 24px));
    overflow-x: hidden;
   
    `;

const ContainerMoviesList = styled.div`
    display: flex;

`;

const ItemContainer = styled.div`
    width: 100%;
    min-width: 370px;
    color: white;
`;

// console.log(ItemContainer.componentStyle.rules);
const Item = styled.div`
    background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
    position: relative;
    transform: scale(0.93);
    background-size: contain;
    margin: auto;
    margin-top: 10px;
    
    transition: 0.4s;
    border-radius: 6px;
    box-shadow: 0px 20px 19px 0px rgb(0 0 0);
    
}
;
    img {
        height: 99%;
        width: 100%;
        z-index: 0;
        border-radius: 6px;
        border: solid 3px RGBA(205, 204, 205, 0.5);
    }
    
    &:hover {
        cursor: pointer;
        transform: scale(1);
        img {
            border: solid 3px rgba(205, 204, 205, 1);
        }
    }
`;

export default ListMovie;

