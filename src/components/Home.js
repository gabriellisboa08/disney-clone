import styled from 'styled-components';
import HomeVideosIcon from './HomeVideosicons';
import Slider from './Carousel/Index';
import MarvelList from './Lists/Marvel.js';
import Trending from './Lists/Trending';
import Action from './Lists/Action';
import Horror from './Lists/Horror';
import Romance from './Lists/Romance';

const Home = () => {
    return (
        <ContainerHome>
            <Slider />
            <ContainerLists>
                <HomeVideosIcon />
            </ContainerLists>
            <MarvelList />
            <Trending />
            <Romance />
            <Horror />
            <Action />
        </ContainerHome>
    );
};

const ContainerLists = styled.div`
    width: 100%;
`;

const ContainerHome = styled.main`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 calc(3.5vw + 24px);
`;

export default Home;
