import React, { useEffect, useState } from 'react'
import axios from './axios'
import "./Rows.css"




const Rows = (props) => {
    const {fetchUrl : url , title , isLargeRow=false} = props;
    const baseImageUrl ='https://image.tmdb.org/t/p/original/';

    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchMovies()
        {
            const request = await axios.get(url)
            setMovies(request.data.results)
        }

        fetchMovies();
    },[url])


    return (
        
        <section className="row">
            <h2>{title}</h2>

            <div className="row-posters">
                {movies.map(
                    (movie) =>
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        
                 
                            <img className={`row-poster ${isLargeRow && 'row-poster-large'}`} 
                                key={movie.id} loading="lazy"
                            src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name}
                            />
                        
                    )

                )}
               
            </div>
                        
        </section>
        
    
    )
}

export default React.memo(Rows) 
