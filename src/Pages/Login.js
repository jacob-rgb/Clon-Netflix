import {  makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import logo from '../Assets/Images/Logo.png';
import fondoLogin from '../Assets/Images/Fondo-Login.jpg';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import Signup from '../components/Signup';

export const Login = () => {
  const classes = useStyles();
  const [signIn, setSignin] = useState(false);

    return (
        <div className={classes.root}>
            <img src={logo} alt='logo' className={classes.logo} />
            <NetflixButton radius="true" className={classes.session} onClick= {() => { setSignin(true) }}>Iniciar sesión</NetflixButton>
            <div className={classes.info}>
                {
                  signIn ? <Signup />
                         :
                         <>
                            <Typography variant='h4' gutterBottom>
                                Unlimited films, TV programmes and more.
                            </Typography>
                            <Typography variant='h5'>
                                Watch anywhere. Cancel at any time.
                            </Typography>
                            <Typography variant='h6' gutterBottom>
                                Ready to watch ? Enter your email to create or restart your membership.
                            </Typography>
                            <div className={classes.inputBlock}>
                                <NetflixInput placeholder="Email adress" />
                                <NetflixButton radius="true" style={{border:'0 5px 5px 0 !important'}}>GET STARTED</NetflixButton>
                            </div>
                         </>
                    
                }
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      position:'relative',
      height:'100vh',
      backgroundImage:`url(${fondoLogin})`,
      objectFit:'contain',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    logo: {
      position:'fixed',
      top:0,
      left:20,
      width: "150px",
      cursor: 'pointer',
      zIndex:15
    },
    session: {
      position:"fixed",
      zIndex:15,
      right:20,
      top:20,
    },
    info: {
      color: '#fff',
      zIndex: 15,
      textAlign:'center',
      "& h4": {
        fontWeight:800,
      },
      "& h5": {
        fontWeight:400,
      },     
    },
    inputBlock: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }
  }));