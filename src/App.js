import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core'
import { auth } from './firebase';

import Profile from './Pages/Profile';
import { Paypal } from './Pages/Paypal';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { login, logout, selectUser } from './features/UserSlice';
import { SingleMovie } from './Pages/SingleMovie';
import { SingleSerie } from './Pages/SingleSerie';
import { Movies } from './Pages/Movies';
import { Series } from './Pages/Series';

function App() {
  const user = useSelector(selectUser)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className={classes.root}>

      <Router>
        {
          !user ? (<Login/>) : (
            <Switch>
              <Route path='/login'>
                  <Login />
              </Route>
              <Route path='/profile'>
                  <Profile />
              </Route>
              <Route path='/checkout'>
                  <Paypal />
              </Route>
              <Route path='/movies'>
                  <Movies />
              </Route>
              <Route path='/movie/:id'>
                  <SingleMovie />
              </Route>
              <Route path='/series'>
                  < Series />
              </Route>
              <Route path='/serie/:id'>
                  <SingleSerie />
              </Route>
              <Route path='/'>
                  <Home />
              </Route>
            </Switch>
          )
        }
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111"
  },
}));

export default App;
