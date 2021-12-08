import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Row from '../components/Row';
import requests from '../Requests';

export const Series = () => {

    const classes = useStyles();

    useEffect(() => {
      document.querySelector('html').scrollTo(0,0);
    }, []);

    return (
       <div id="series">
            <Header />
            <Banner />
            <Row title="POPULAR" fetchUrl={requests.getTvPopular}  isLargeRow isSerie />
            <Row title="TOP RATED" fetchUrl={requests.getTopRatedTv} isSerie />
            <Row title="ACTION SERIES" fetchUrl={requests.fetchActionSeries} isSerie />
            <Row title="COMEDY SERIES" fetchUrl={requests.fetchComedySeries} isSerie />
            <Row title="MISTERY SERIES" fetchUrl={requests.fetchMisterySeries} isSerie />
            <Row title="FANTASY" fetchUrl={requests.fetchFantasySeries} isSerie />

        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
      
    },
  }));