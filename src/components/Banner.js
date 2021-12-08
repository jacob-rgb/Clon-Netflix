import { Button, makeStyles, Typography, withWidth } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BannerImg from '../Assets/Images/Prueba-banner.jpeg';
import requests from '../Requests';

const Banner = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState([])

  const truncate = (string, n) => string?.length > n ? `${string.substr(0, n - 1)} ...` : string ;

  useEffect(() => {
    const fetchData = async() => {
      const request = await axios.get("https://api.themoviedb.org/3/"+requests.fetchNetflixOriginals);
      const random = Math.floor(Math.random() * (request.data.results.length - 1));
      setMovie(request.data.results[random]);
      return request
    }
    fetchData();
  },[])

    return (
        <div className={classes.root} style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}}>
            <div className={classes.content}>
                <Typography variant='h2' component='h1' >
                  {movie.name}
                </Typography>
                
                <div className={classes.buttons}>
                   <Button>Play</Button>
                   <Button>My List</Button>
                </div>

                <Typography style={{wordWrap: "break-word"}} variant='h6' className={classes.description} >
                  {
                    truncate(movie.overview, 160)
                  }
                </Typography>

            </div>
            <div className={classes.fadeDown}></div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${BannerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      height: '600px',
      objectFit: 'contain',
      color:"#fff",
    },
    content:{
      paddingLeft:"20px",
      display: "flex",
      height:"100%",
      justifyContent:"center",
      flexDirection:"column",
      position:"relative",
      zIndex:"999"
    },
    buttons: {
      marginTop: theme.spacing(1),
      "& button": {
        cursor: 'pointer',
        color: '#fff',
        fontWeight: 700,
        borderRadius: "5px",
        padding: theme.spacing(1, 4, 1, 4),
        marginRight:"1rem",
        backgroundColor: "rgba(51,51,51, 0.5)"
      },
      "& button:hover": {
        color: "#000",
        backgroundColor: '#e6e6e6'
      }
    },
    description: {
        maxWidth:"500px",
        marginTop: theme.spacing(4)
    },
    fadeDown: {
      position: "absolute",
      top: "30vh",
      bottom: "0",
      left: 0,
      right: 0,
      zIndex: 99,
      backgroundImage: "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
    }
  }));

export default Banner
