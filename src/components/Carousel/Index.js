import { useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; //

const imagesSlides = [
    { id: 1, url: `/images/images/slider-badag.jpg` },
    { id: 1, url: `/images/images/slider-badging.jpg` },
    { id: 1, url: `/images/images/slider-scale.jpg` },
    { id: 1, url: `/images/images/slider-scales.jpg` },
];

const imgSlider = () => {
    return (
        <ContainerCarousel>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showThumbs={false}
                showStatus={false}
                centerMode
            >
                {imagesSlides.map((item, index) => (
                    <CarouselItem key={index}>
                        <img src={item.url}></img>
                    </CarouselItem>
                ))}
            </Carousel>
        </ContainerCarousel>
    );
};

const ContainerCarousel = styled.div`
    width: 100%;
    padding-bottom: 30px ;
    
`;

const CarouselItem = styled.div`
    max-height: 450px;
    height: 30vw;

    background-size: contain;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 10px;
    border: solid 3px transparent;
    transition: 0.4s;
    :hover {
        
        cursor: pointer;
        border: solid 3px white;
    }
    img {
        border-radius: 10px;
        height: 100%;
    }
`;

export default imgSlider;
