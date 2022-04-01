import { useEffect, useState } from 'react';
import BasicFetch from '../basicFetch';
import ListMovie from './Listmovie';

const Drama = () => {
    const [movies, setMovieLists] = useState([]);

    useEffect(() => {
        const loadList = async () => {
            let data = await BasicFetch(
                'https://api.themoviedb.org/3/discover/movie?with_genres=35&language=pt-BR'
            );
            setMovieLists(data);
            console.log(movies);
        };
        loadList();
        console.log(movies);
    }, []);
    return <ListMovie items={movies.results} title='Comédia' />;
};

export default Drama;
