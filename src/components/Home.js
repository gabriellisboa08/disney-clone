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
                <MarvelList />
                <Trending />
                <Romance />
                <Horror />
                <Action />
            </ContainerLists>
        </ContainerHome>
    );
};

const ContainerLists = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 0 calc(3.5vw + 24px);
    width: 100%;
`;

const ContainerHome = styled.main`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export default Home;
