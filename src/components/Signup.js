import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { auth } from '../firebase';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';

const Signup = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          history.push("/");
        })
        .catch((err)=>alert(err.message))
  }

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
        .then((authUser) => {history.push('/')})
        .catch((err) => alert(err.message))
  }

    return (
        <div className={classes.root}>
            <Typography variant='h5' align='left'>Sign In</Typography>
            <form className={classes.form}>
                <NetflixInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={classes.email}/>
                <NetflixInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className={classes.password} />
                <NetflixButton onClick={signIn} type="submit" wide="medium" radius="true">Sign In</NetflixButton>
                <Typography variant='subtitle2'>
                    New to Netflix ?{"  "}
                    <span className={classes.signupLink} onClick={register}>
                      Sign Up now.{" "}
                    </span>
                </Typography>
            </form>
        </div>
    )
}

export default Signup

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "350px",
      width:"20rem",
      height: "25rem",
      background: "rgba(0,0,0,0.65)",
      display:"flex",
      flexDirection:"column",
      justifyContent: "space-evenly",
      alignItems:'center',
    },
    form: {
      width: "80%"
    },
    email: {
      marginBottom: theme.spacing(2)
    },
    password: {
      marginBottom: theme.spacing(4)
    },
    signupLink: {
      cursor:"pointer",
      color: "#fff",
      "&:hover": {
        textDecoration:'underline',
      }
    }
  }));