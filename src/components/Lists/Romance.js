import { useEffect, useState } from 'react';
import BasicFetch from '../basicFetch';
import ListMovie from './Listmovie';

const Romance = () => {
    const [movies, setMovieLists] = useState([]);

    useEffect(() => {
        const loadList = async () => {
            let data = await BasicFetch(
                'https://api.themoviedb.org/3/discover/movie?with_genres=10749&language=pt-BR'
            );
            setMovieLists(data);
            console.log(movies);
        };
        loadList();
        console.log(movies);
    }, []);
    return <ListMovie items={movies.results} title="Romance" />;
};

export default Romance;
