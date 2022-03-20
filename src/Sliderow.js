import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sliderow.css'

function Sliderow({  title, src }) {
  return (
    <div className='sidebaroption'>
           {src && <Avatar src={src}/>}  
           <p>{title}</p>
</div>
  )
}

export default Sliderow