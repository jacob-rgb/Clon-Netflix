import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Row from '../components/Row';
import requests from '../Requests';

export const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    document.querySelector('html').scrollTo(0,0);
  }, [])

    return (
        <div id="home">
            <Header />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow isSerie />
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
            <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
            <Row title="REALITIES" fetchUrl={requests.fetchRealitySeries} />
            <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
            <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="MISTERY SERIES" fetchUrl={requests.fetchMisterySeries} />
            <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />

        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
  }));