import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Header.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
// import { auth } from './firebase';

function Header(active) {
const [{user}, dispatch]  = useStateValue();

// const handleAuthentication = () =>{
//   if (user){
//     auth.signOut();
//   }
// }

  return (
    <div className="header">
        <div className="headr-wrap">
       <Link to = '/'>
            <img className="facebook-img"
             src="https://img.icons8.com/fluency/2x/facebook-new.png" alt="hbh"/>
     </Link>
             <div className='header-input'>
                   <SearchIcon className='search-icon' /> 
                  <input type='text' placeholder="Search Facebook"/>
             </div>
        </div>

             <div className='header-middle'>
               <div className={`header-option ${ active && 'header-option--active'}`}>
                   <HomeIcon active fontSize='large'/>
               </div>
               <div className='header-option'>
                   <AssistantPhotoIcon   fontSize='large'/>
               </div>
               <div className='header-option'>
                   <SubscriptionsIcon fontSize='large'/>
               </div>
               <div className='header-option'>
                   <SupervisedUserCircleIcon fontSize='large'/>
               </div>
             </div>

             <div className='header-left'>
              <div className='For-Avatar'>
                <Avatar src={user.photoURL} />
                <h4 >{user.displayName}</h4>
              </div>

                     <div className='header-lefticons'>
                     <AddIcon fontSize='medium'/>
                    </div>
                    <div className='header-lefticons'>
                     <ForumIcon fontSize='medium'/>
                    </div>
                    <div className='header-lefticons'>
                     <CircleNotificationsIcon fontSize='medium'/>
                    </div>
                    <div className='header-lefticons'>
                     <ExpandMoreIcon fontSize='medium'/>
                    </div>
                 </div>


       </div>

  )
}

export default Header