import styled from 'styled-components';
import HomeVideosIcon from '../HomeVideosicons';
import Slider from './Carousel/Index';

const Home = () => {
    return (
        <ContainerHome>
            <Slider />
            <ContainerLists>
                <HomeVideosIcon />
            </ContainerLists>
            {/* Carousel 
                items franchise
                list
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
    padding: 0 calc(3.5vw + 24px);
`;

const ContainerHome = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export default Home;
