
import './App.css';
import Header from './Header';
import Login from './Login';
import Slider from './Slider';

// import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
const user = null;
  return (
 
    <div className="app">
  {!user ?(
    <Login/>
  
  ):(
    <>
    <Header/>

    <div className='app-body'>
      <Slider/>
  </div>
  </>
  )}
 </div>
  );
}

export default App;



