import React, {useState} from 'react'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider'
import './Login.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
  const history = useHistory()
  const [state, dispatch] = useStateValue()
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')

  const signin = e =>{
     e.preventDefault();
     auth
     .signInWithEmailAndPassword(email,password)
     .then((auth)=>{
      //  console.log(auth);
        if(auth){
          history.push('/');
        }
     })
      .catch(error => alert(error.message))
  }

  const register = e =>{
    e.preventDefault();

      auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
         console.log(auth)
      })
       .catch(error => alert(error.message))
  }


  const signwithgoogle = e =>{
    auth.signInWithPopup(provider)
    .then((result) =>{
  
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
     
         
      console.log(result)
    })
    .catch(error => alert(error.message))
  }


  

  return (
    <div  className='Login'>

      <div className='login-left'>
        <img className='facebook-image' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="src"/>
        <div className='facebook-info'>
            <p>Facebook helps you connect and share with the people in your life.</p>
        </div>
      </div>

      <div className='login-right'>
       <form>
           <div className='login-input'>
               <input type='text' value={email} onChange={e => SetEmail(e.target.value)} placeholder='Email address'/>
               <input type='password' value={password} onChange={e => SetPassword(e.target.value)} placeholder='password'/>
           </div>
       </form>

         <div className='login-btn'>
          <button className='logn-btn' type='submit' onClick={signin}>Login</button>
         </div>

           <div className='sign-with'>
               <p className='sign-in'>Sign up with</p>
           </div>

           <div className='google-btn' >
         <button type='submit' onClick={signwithgoogle}>
              <img className='google-icon' src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/google-icon.5c764c55.svg" alt=""/>
              <span>Continue with Google</span>
     </button>

  
      </div>

      <div className='hr'></div>
        <div className='create-account'>
        <button className="create" type='submit' onClick={register}>Create your Account</button>
        </div>

        <div className='end-line'>
       <a href='/'>Create a Page</a> for a celebrity, brand or business.
        </div>
      </div>

   

    </div>
  )
}

export default Login