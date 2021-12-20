import React from 'react'
import '../Css/Feed.css';
import Post from './Post';
import QueryBox from './QueryBox';
function Feed() {
    return (
        <div className='feed'>
           
            <QueryBox/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            
        </div>
    )
}

export default Feed
