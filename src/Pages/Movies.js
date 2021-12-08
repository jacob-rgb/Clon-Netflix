import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Row from '../components/Row';
import requests from '../Requests';

export const Movies = () => {

    const classes = useStyles();

  useEffect(() => {
    document.querySelector('html').scrollTo(0,0);
  }, [])

    return (
        <div id="movies">
            <Header />
            <Banner />
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}  isLargeRow />
            <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
            <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
            <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />

        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
      
    },
  }));