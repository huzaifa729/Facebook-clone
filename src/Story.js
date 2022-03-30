import React from 'react'
import { Avatar } from '@material-ui/core'
import './Story.css';
function Story({profileimg,title,image}) {
  return (
    <div style={{ backgroundImage: `url(${image})`}} className="story">
          <Avatar className='story-avatar' src={profileimg}/>
            <h4 className='story-title'>{title}</h4>
    </div>
  )
}

export default Story;