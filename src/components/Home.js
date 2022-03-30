import styled from 'styled-components';
import HomeVideosIcon from './HomeVideosicons';
import Slider from './Carousel/Index';
import MarvelList from './Lists/Marvel.js';

const Home = () => {
    return (
        <ContainerHome>
            <Slider />
            <ContainerLists>
                <HomeVideosIcon />
            </ContainerLists>
            <MarvelList />
            {/*
                list
                list
                list
                list
                list
                list
            */}
        </ContainerHome>
    );
};

const ContainerLists = styled.div`
    ${'' /* padding: 0 calc(3.5vw + 24px); */}

    width:100%
`;

const ContainerHome = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 calc(3.5vw + 24px);
`;

export default Home;
