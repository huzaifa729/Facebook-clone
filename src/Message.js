import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'
import { useStateValue } from './StateProvider';
function Message() {
  const [{user},dispatch]=useStateValue()
  return (
    <div className='meassage'>
      <div className='message-input'>
        <Avatar src={user.photoURL}/>
        <form>
        <input type='text' placeholder="What's  on your Minds?" />
        <input type='text' placeholder="imageURL?" /> 
        </form>
      </div>
    </div>
  )
}

export default Message