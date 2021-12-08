import { makeStyles, Typography, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';


const Row = ({title, fetchUrl, isLargeRow, isSerie}) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
        const request = await axios.get("https://api.themoviedb.org/3/"+fetchUrl);
        setMovies(request.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        return request
    };
    fetchData();
  }, [fetchUrl])

    return (
        <div id={title} className={classes.root}>
            <Typography variant='h4'>{title}</Typography>
            {
              !loading && 
              <div className={classes.posters}>
                {
                  movies?.map((movie) => 
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&
                    (
                      <img className={`${classes.poster} ${
                        isLargeRow && classes.posterLarge
                      }`}
                      id ={movie.id}
                      key={movie?.id}
                      src={`${base_url}${
                        isLargeRow ? movie?.poster_path : movie?.backdrop_path
                      }`}
                      alt={movie.name}
                      onClick={() => { 
                        isSerie? history.push(`/serie/${movie.id}`) : history.push(`/movie/${movie.id}`)
                      }}
                      />
                    )
                       )
                }
            </div>
            }
            {
                  loading &&
                   (
                     <div className={classes.loading}>
                        < CircularProgress color="secondary" />
                     </div>
                   )
                }
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      color: "#fff",
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      position:"relative",
      minHeight: "200px",
      [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
      },
    },
    posters: {
      display:"flex",
      overflowY:"hidden",
      overflowX:"scroll",
      paddingBottom:"10px",
      "&::-webkit-scrollbar": {
        backgroundColor:"#393939",
        height:"5px",
      },
      "&::-webkit-scrollbar-track": {
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor:"red"

      },
      
    },
    poster: {
      maxHeight:"12rem",
      objectFit:"contain",
      marginRight: theme.spacing(1),
      cursor:"pointer",
      transition: "transform 450ms",
      "&:hover": {
        transform:"scale(1.1)",
      }
    },
    posterLarge: {
      maxHeight:"15rem",
      "&:hover": {
        transform: "scale(1.15)",
      }
    },
    loading: {
      position:"absolute",
      top:0,
      left:0,
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
      width:"100%",
      minHeight:"inherit"
    }
  }));

export default Row
