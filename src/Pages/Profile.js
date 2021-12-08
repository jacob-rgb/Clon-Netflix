import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import NetflixAvatar from '../Assets/Images/Avatar-netflix.png'
import Plans from '../components/Plans';
import { NetflixButton } from '../styled/styledcomponents';
import { auth } from '../firebase';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';

const Profile = () => {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const history = useHistory();

  const handleSignOut = () => {
    auth.signOut();
    history.push('/login');
  }

    return (
        <div className={classes.root}>
          <Header />
            <Typography variant='h3'>Edit Profile</Typography>
            <div className={classes.info}>
                <img src={NetflixAvatar} alt='netflix-avatar' />
                <div className={classes.details} >
                    <div className={classes.plans}>
                        <Typography variant='h6'>{ user.email }</Typography>
                        <Typography className={classes.plansText} variant='h5' gutterBottom>Plans</Typography>
                        <Plans cost={7.99}>Netflix Standard</Plans>
                        <Plans cost={11.99}>Netflix Basic</Plans>
                        <Plans color="gray" wide={"medium"} cost={15.99}>Netflix Premium</Plans>
                        <NetflixButton wide="fullWidth" onClick={handleSignOut}>Sign Out</NetflixButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

const useStyles = makeStyles((theme) => ({
    root: {
      color:'#fff',
      minHeight:'100vh',
      width:'100vw',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    },
    info: {
      width:'80%',
      maxWidth:'800px',
      display:'flex',
      [theme.breakpoints.down("xs")] : {
        width: "90%",
      },
      "& img": {
        height: "100px",
        [theme.breakpoints.down("xs")] : {
          display: "none",
        }
      }
    },
    details: {
      width: '100%',
      marginLeft: theme.spacing(3),
      [theme.breakpoints.down("xs")] : {
        marginLeft: "0px",
      },
      "& h6": {
        backgroundColor:'#aaa',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        fontSize:"18px"
      }
    },
    plans: {
      width:'100%',
      
    },
    plansText: {
      borderBottom: "1px solid lightgray"
    }
  }));