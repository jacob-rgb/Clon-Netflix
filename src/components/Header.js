import { AppBar, Avatar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import logo from "../Assets/Images/Logo.png";

const Header = () => {

  const classes = useStyles();
  const history = useHistory();
  const [show, setShow] = useState(true);

  const hideHeader = () => {
      if(window.scrollY > 100) {
          setShow(false)
      } else {
          setShow(true)
      }
  }

  useEffect(() => {
      window.addEventListener("scroll", hideHeader);
      return () => {
          window.removeEventListener("scroll", hideHeader);
      }
  }, [])


    return (
        <AppBar position="sticky" elevation={ 0 } className={`${classes.root}  ${!show && classes.transparent}`}>
            <Toolbar className={classes.toolbar}>
                <div style={{display:"flex", alignItems:"center",gap:"10px"}}>
                   <IconButton onClick={() =>history.push("/")}>
                     <img src={ logo } alt="Netflix Logo" className={classes.logo} />
                   </IconButton>
                   <Typography style={{cursor:"pointer"}} variant="h6" color="inherit" component="div" onClick={() => {history.push(`/`)}}>
                     Home
                   </Typography>
                   <Typography style={{cursor:"pointer"}} variant="h6" color="inherit" component="div" onClick={() =>history.push("/series")}>
                     Series Tv
                   </Typography>
                   <Typography style={{cursor:"pointer"}} variant="h6" color="inherit" component="div" onClick={() =>history.push("/movies")}>
                     Movies
                   </Typography>
                </div>
                <Avatar variant="square" style={{cursor:'pointer'}} onClick={() =>history.push('/profile')} />
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#111',
        top: 0,
        left:0,
        right:0,
        transition: 'all .2s linear',
        userSelect:"none",
    },
    logo: {
        width: "100px",
        cursor: "pointer"
    },
    transparent: {
        backgroundColor: 'transparent'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center'
    }
  }));

export default Header
