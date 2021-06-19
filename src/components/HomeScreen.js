import React from 'react'
import NavBar from './NavBar'
import "./HomeScreen.css"
import Banner from './Banner'
import requests from './Requests'
import Rows from './Rows'

const HomeScreen = () => {

    



    return (
        <div className="homescreen">
            <NavBar />
            <Banner />
        
             

            <Rows title="Netflix Originals" fetchUrl={requests?.fetchNetflixOriginals} isLargeRow={true} />
            <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

        </div>
    )
}
export default React.memo(HomeScreen)
