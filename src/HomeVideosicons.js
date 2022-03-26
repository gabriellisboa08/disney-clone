import { toContainElement } from '@testing-library/jest-dom/dist/matchers';
import { useState } from 'react';
import styledComponents from 'styled-components';
import styled from 'styled-components';

const HomeVideosIcon = () => {
    const [VideosAndImages, setVideosAndImages] = useState([
        {
            name: 'Disney',
            image: '/images/images/viewers-disney.png',
            video: '/videos/videos/1564674844-disney.mp4',
        },
        {
            name: 'Pixar',
            image: '/images/images/viewers-pixar.png',
            video: '/videos/videos/1564676714-pixar.mp4',
        },
        {
            name: 'Marvel',
            image: '/images/images/viewers-marvel.png',
            video: '/videos/videos/1564676115-marvel.mp4',
        },
        {
            name: 'Starwars',
            image: '/images/images/viewers-starwars.png',
            video: '/videos/videos/1608229455-star-wars.mp4',
        },
        {
            name: 'NationalGeo',
            image: '/images/images/viewers-national.png',
            video: '/videos/videos/1564676296-national-geographic.mp4',
        },
    ]);

    return (
        <Container>
            {VideosAndImages.map((item, index) => (
                <ItemContainer>
                    <Item key={index}>
                        <div>
                            <img src={item.image}></img>
                        </div>
                        <div>
                            <video autoPlay loop muted>
                                <source
                                    src={item.video}
                                    type="video/mp4"
                                ></source>
                            </video>
                        </div>
                    </Item>
                </ItemContainer>
            ))}
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
`;

const ItemContainer = styled.div``;

const Item = styled.div`
    position: relative;
    transform: scale(0.9);
    background-size: contain;
    margin: auto;
    margin-top: 10px;
    background: #090a0f;
    transition: 0.2s;
    border-radius: 10px;
    border: solid 3px red;
    img {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1;
        border-radius: 10px;
    }
    video {
        position: relative;
        bottom: 0;
        border-radius: 10px;

        width: 100%;
        height: 100%;
        opacity: 0;
    }

    &:hover {
        transform: scale(1);
        video {
            opacity: 1;
        }
    }
`;

export default HomeVideosIcon;
