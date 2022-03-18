import React from 'react'
// import FacebookIcon from '@mui/icons-material/Facebook';
 import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
function Header() {
  return (
    <div className="header">
        <div className="headr-wrap">
            <img className="facebook-img"
             src="https://img.icons8.com/fluency/2x/facebook-new.png"/>

             <div className='header-input'>
                   <YoutubeSearchedForIcon fontSize='small'/> 
                  <input type='text' placeholder="Search Facebook"/>
             </div>
        </div>
    </div>
  )
}

export default Header