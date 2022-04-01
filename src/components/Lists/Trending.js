import { useEffect, useState } from 'react';
import BasicFetch from '../basicFetch';
import ListMovie from './Listmovie';

const Trending = () => {
    const [movies, setMovieLists] = useState([]);

    useEffect(() => {
        const loadList = async () => {
            let data = await BasicFetch(
                'https://api.themoviedb.org/3/trending/all/week?language=pt-BR'
            );
            
            setMovieLists(data);
            console.log(movies);
        };
        loadList();
        
    }, []);
    return <ListMovie items={movies.results} title='Top Week' />;
};

export default Trending;
