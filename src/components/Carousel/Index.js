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
                centerMode={true}
               
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
    width: 100vw;
    right: 0;
`;

const CarouselItem = styled.div`
    max-height: 400px;
    height: 100%;
    background-size: contain;
    img {
        height: 100%;
    }
`;

export default imgSlider;
