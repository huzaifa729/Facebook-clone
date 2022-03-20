import React from 'react'
import './Login.css'

function Login() {
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
               <input type='text' placeholder='Email address'/>
               <input type='password' placeholder='password'/>
           </div>
       </form>

         <div className='login-btn'>
          <button className='logn-btn'>Login</button>
         </div>

           <div className='sign-with'>
               <p className='sign-in'>Sign up with</p>
           </div>

           <div className='google-btn'>
         <button>
              <img className='google-icon' src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/google-icon.5c764c55.svg" alt=""/>
              <span>Continue with Google</span>
     </button>
      </div>
      <div className='hr'></div>
        <div className='create-account'>
        <button className="create">Create your Account</button>
        </div>

        <div className='end-line'>
       <a href='/'>Create a Page</a> for a celebrity, brand or business.
        </div>
      </div>

   

    </div>
  )
}

export default Login