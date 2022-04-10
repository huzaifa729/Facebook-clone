import React, {useState, useEffect} from 'react'
import Storyreel from './Storyreel'
import './Feed.css'
import Message from './Message'
import Post from './Post'
import db from './firebase'
//  import db from "./firebase";
function Feed() {
 
    const [posts, setPosts] = useState([]);

     useEffect(()=>{
          db.collection('posts')
          .orderBy('timestamp','desc')
          .onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) =>({ id: doc.id, data: doc.data() })))
          );
    },[]);

    // useEffect(()=>{
    //   db.collection('posts').onSnapshot(snapshot => (
    //     setPosts(snapshot.docs.map((doc) => doc.data()))
    //   )) 
    // },[]) 
              
    
  return (
    <div className='feed'>
        <Storyreel/>
        <Message/>


     

        {posts.map((post) =>(
             <Post
                 key={post.id}
                 profilephoto={post.data.profilephoto}
                 username={post.data.username}
                 timestamp={post.data.timestamp}
                 message={post.data.message}
                 image={post.data.image}
          />
        ))}


    </div>
  )
}

export default Feed






