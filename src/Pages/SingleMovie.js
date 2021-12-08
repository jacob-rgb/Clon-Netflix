import React, { useEffect, useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { SettingsBackupRestore, PlayArrow, ControlPoint  } from '@material-ui/icons';
import { NetflixButton } from '../styled/styledcomponents';


export const SingleMovie = () => {

    const history = useHistory();

    const classes = useStyles();

    let { id } = useParams();

    const [movie, setMovie] = useState(null);

    const [videos, setVideos] = useState(null)

  const base_url = "https://image.tmdb.org/t/p/original/";


    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get("https://api.themoviedb.org/3/"+`movie/${id}?api_key=6883819cdbb71822e4ecc18fd7844c26`);
            setMovie(request.data);
            console.log(request.data);
            return request
        };
        const fetchData2 = async () => {
            const request = await axios.get("https://api.themoviedb.org/3/"+`movie/${id}/watch/providers?api_key=6883819cdbb71822e4ecc18fd7844c26`);
            setVideos(request.data.results?.US?.link || "");
            console.log(request.data.results?.US?.link);
            return request
        };
        fetchData();
        fetchData2();
      }, [])

    

    useEffect(() => {
       
    }, [])

    return (
        movie &&
        <div className={classes.root}>
            <img className={`${classes.imgBg}`}
                      src={`${base_url}${movie?.backdrop_path}`}
                      alt={movie.title}
                      />
            <div className={classes.movieInfo}>
              <div><span>Nota: { movie.vote_average }</span></div>
              <Typography variant='h3'>{movie.title}</Typography>
              <div className={classes.genres}>
                 <div>{ movie.genres.map(genre => (<span key={`id${genre.name}`}>{ genre.name }, </span>))}</div>
                 <div><span>{ movie.runtime } mins</span></div>
              </div>
              <div>
                  <span>Año: { movie.release_date }</span>
              </div>
              <div>
                  <p>
                      { movie.overview }
                  </p>
              </div>
              <div className={classes.infoBtns}>
               <a href={ videos } target="_blank">
                 <NetflixButton radius="true" >Play < PlayArrow /></NetflixButton>
               </a>
               <a href={ movie.homepage } target="_blank">
                 <NetflixButton radius="true" >Más Info < ControlPoint /></NetflixButton>
               </a>
              </div>
            </div>
            <div className={classes.backBtn}>
               <NetflixButton onClick={() => { history.goBack() }} radius="true" >Back < SettingsBackupRestore fontSize="small" /></NetflixButton>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      color:"white",
      height:"100vh",
      width:"100vw",
      overflow:"hidden",
      display:"flex",
      alignItems:"flex-start",
      position:"relative",
      backgroundColor:"transparent",
      zIndex:"2",
      userSelect:"none",
      "& img": {
          position:"absolute",
          top:0,
          left:0,
          width:"100%",
          height:"100%",
          zIndex:"-1",
          filter:"brightness(40%)",
          objectFit:"cover",
          userSelect:"none",
      }
      },
      movieInfo: {
        width:"80%",
        maxHeight:"90vh",
        margin:"30px 0",
        maxWidth:"560px",
        padding: theme.spacing(2),
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        overflowY: "scroll",
        userSelect:"text",
        "& p": {
            fontSize:"20px"
        },"&::-webkit-scrollbar ": {
            display: "none"
        }
      },
      genres: {
          width:"70%",
          display:"flex",
          justifyContent:"space-between"
      },
      infoBtns: {
        display:"flex",
        gap: theme.spacing(2),
        marginTop: theme.spacing(2),
        "& a": {
            textDecoration:"none"
        }
      },
      backBtn: {
          position:"absolute",
          top:"20px",
          right:"20px",
      }
    }
));
