import React from 'react'
import Storyreel from './Storyreel'
import './Feed.css'
import Message from './Message'
function Feed() {
  return (
    <div className='feed'>
        <Storyreel/>
        <Message/>
    </div>
  )
}

export default Feed