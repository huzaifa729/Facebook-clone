import React from 'react'
import './Slider.css'
import Sliderow from './Sliderow'

function Slider() {
  return (
    <div className='slider'>
       <Sliderow src="https://img.icons8.com/fluency/2x/facebook-new.png" title="Huzaifa Dabir"/>
       
       
       <Sliderow src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" title="Friends" />
       <Sliderow src='https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/k0tRiO8UGxF.png' title="Welcome" />
       <Sliderow src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="Groups" />
       <Sliderow src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png' title="Watch" />
       <Sliderow src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" title="Memories" />
       <Sliderow src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" title='Saved'/>
       <Sliderow src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png" title='Climate Science Center'/>
       <Sliderow src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png" title="Covid-19 Information Center"/>
       <Sliderow src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png" title='Messengers'/>
    </div>
  
  )
}

export default Slider