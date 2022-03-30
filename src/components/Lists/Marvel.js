import { useEffect, useState } from 'react';
import BasicFetch from '../basicFetch';
import ListMovie from './Listmovie';

const MarvelList = () => {
    const [movies, setMovieLists] = useState([]);
    
    useEffect(() => {
        const loadList = async () => {
            let data = await BasicFetch('list/1?');
            setMovieLists(data);
            console.log(movies);
        };
        loadList();
        console.log(movies);
    }, []);
   ;

    return <ListMovie items={movies.results} title={movies.name}/>

 
};

export default MarvelList;
