import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./components/HomeScreen"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux"
import {userActions} from "./features/store/userSlice"
import ProfileScreen from './components/ProfileScreen';
function App() {

  let user=useSelector(state => state.user.user);
  const dispatch = useDispatch();
  useEffect(() =>
  {

    const unsubscribe = auth.onAuthStateChanged((userAuth) =>
    {
      if(userAuth)
      {
        dispatch(userActions.login({
          uid: userAuth.uid,
          email : userAuth.email

        }))
      }
      else{
        dispatch(userActions.logout())
      }
    })

    return unsubscribe
  },[dispatch])

  return (
    <div className="App">
        <Router>

          {!user ? 
                      <Login />
                     :(
                      <Switch>
                      <Route path="/" exact>
                          <HomeScreen />
                      </Route>
                      <Route path="/profile" exact>
                        <ProfileScreen />
                      </Route>
       
                 </Switch>  
                     )
     
          
          
          
          
          }
          


          

        </Router>
    </div>
  );
}

export default App;
