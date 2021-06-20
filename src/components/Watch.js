import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import "./Watch.css"
import {useDispatch , useSelector} from "react-redux"
import {modalActions} from "../features/store/modalSlice"
import { API_KEY } from './Requests'
function Watch(props) {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.isModal)
    const [trailerLink, setTrailerLink] = useState(null);
    
    
    const {name: movieTitle, id, first_air_date: air_data, overview, vote_average: rating }= props.banner;
    
    

    useEffect(() =>
    {
        let timerId
        async function fetchTrailerLink()
        {
            fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(data => setTrailerLink(data?.results[0]?.key)) 
            .catch((err) => alert(err.message))
        }

  
        
        timerId=setTimeout(() =>
        {
            fetchTrailerLink();
        },1500)



        return () => clearTimeout(timerId);
    },[id])


    return (
        (isOpen && (<Modal>
            <section className="watch" key={id}>
                <div className="watch-contents">

                    <h1>{movieTitle}</h1>
                    <hr></hr>
                </div>
                <div className="trailer-contents">
                    <div className="trailer-info">
                        <h2>Synopsis</h2>
                        <h3>{overview}</h3>
                        <h2>Rating : {rating}</h2>
                        <h2>First air date : {air_data}</h2>
                    </div>
        
                   {trailerLink ?(<iframe 
                            src={`https://www.youtube.com/embed/${trailerLink}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                    </iframe>) : (<h1>Sorry, your trailer could not be fetched.</h1>) } 
                </div>
                <div className="close-btn" onClick={() => {dispatch(modalActions.closeModal())}}>
                    <i class="fas fa-times"></i>
                </div>
            </section>
        </Modal>))
    )
}

export default Watch
