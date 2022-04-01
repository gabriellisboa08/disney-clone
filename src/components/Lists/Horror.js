import { useEffect, useState } from 'react';
import BasicFetch from '../basicFetch';
import ListMovie from './Listmovie';

const Horror = () => {
    const [movies, setMovieLists] = useState([]);

    useEffect(() => {
        const loadList = async () => {
            let data = await BasicFetch('https://api.themoviedb.org/3/discover/movie?with_genres=27&language=pt-BR&api_key=cc6f0df09b8b698a846b90793131765a');
            setMovieLists(data);
            console.log(movies);
        };
        loadList();
        console.log(movies);
    }, []);
    return <ListMovie items={movies.results} title='Horror' />;
};

export default Horror;
