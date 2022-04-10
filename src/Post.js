import React from 'react'
import { Avatar } from '@material-ui/core'
import './Post.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({profilephoto,message,timestamp,image,username}) {
  return (
    <div  className='post'>
         <div className='profile-phots'>
          <Avatar className="aatr-iage" src={profilephoto}/>
          <div className="timestamp">
              <span>{username}</span>
              <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
          </div>
         </div>

        <div className='post-message'>
            <h4>{message}</h4>
        </div>

        <div className='post-image'>
            <img src={image} alt=''/>
        </div>


        <div className='post-option'>
            <div className='post-icon'>
                <ThumbUpOffAltIcon fontSize='medium'/>
                <h4 className='post-name'>Like</h4>
            </div>

            <div className='post-icon'>
                <MessageIcon fontSize='medium'/>
                <h4 className='post-name'>Comments</h4>
            </div>

            <div className='post-icon'>
                <ShareIcon fontSize='medium'/>
                <h4 className='post-name'>Share</h4>
            </div>

            <div className='post-icon'>
                <SendIcon fontSize='medium'/>
                <h4 className='post-name'>Send</h4>
            </div>
        </div>

    </div>
  )
}

export default Post