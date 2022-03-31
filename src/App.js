import React, { useEffect } from 'react';
import './App.css';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Slider from './Slider';
import { useStateValue } from './StateProvider'


 import {  BrowserRouter as Router,
  Switch, Route, Link } from "react-router-dom";
import Feed from './Feed';
import Widgets from './Widgets';


function App() {
   const [{user}, dispatch] = useStateValue();

   useEffect(()=>{
     auth.onAuthStateChanged(
       authUser => {
         console.log('hello',authUser)

         if(authUser){
              dispatch({
                  type: "USER",
                  user: authUser
              })
         }
          else{
            dispatch({
              type: "USER",
              user:null
          })
          }
       })
   },[])

  return (
 <Router>
    <div className="app">
      <Switch>
  {!user  ?  (
   

    <Login/>
  
  ):(
    <>
    <Route path='/'>
    <Header/>
    </Route>

    <div className='app-body'>
      <Slider/>
      <Feed/>
      <Widgets/>
  </div>
  </>
  )}
  </Switch>
 </div>
 </Router>
  );
}

export default App;



