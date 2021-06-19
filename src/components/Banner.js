import React, { useEffect, useState } from 'react'
import "./Banner.css"
import requests from './Requests';
import axios from './axios';
import {modalActions} from "../features/store/modalSlice"
import {useDispatch} from "react-redux"
import Watch from './Watch';
function Banner() {

    const [banner,setBanner] = useState([]);
    const dispatch = useDispatch()
    const truncate = (string,n) =>
    {
        return string?.length>n ? string.substr(0,n-1) + '...' : string
    }

    useEffect(() =>
    {
        async function fetchData()
        {
        
          const request = await axios.get(requests?.fetchNetflixOriginals)
              setBanner(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
          
          
        }

        fetchData();
    },[])


    return (
        <section className="banner" 
                 style ={{
                        backgroundImage : `url(https://image.tmdb.org/t/p/original/${banner?.backdrop_path})`
                 }}
        >
          <Watch banner={banner} />
        <article className="banner-contents">
            <h1 className="banner-title">{banner?.name || banner?.['original_name']}</h1>
            <div className="banner-buttons">
                <button className="banner-button" onClick={() => {dispatch(modalActions.OpenModal())}}>Play</button>
                <button className="banner-button">My List</button>
            </div>
            <h1 className="banner-description">
                 {truncate(banner?.overview,200)}
            </h1>
        </article>  
                
              
        <div className="banner-fadeBottom"></div>  

        </section>
    )
}

export default Banner
