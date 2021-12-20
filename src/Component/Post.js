import { Avatar } from '@material-ui/core';
import React from 'react'
import '../Css/Post.css';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import ShareOutlined from '@material-ui/icons/ShareOutlined';
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
function Post() {
    return (
        <div className="post">
            <div className="post_info">
                <Avatar/>
                <h4>@username</h4>
                <small>Timestamp</small>
            </div>

         <div className="post_body">
             <div className="post_question">
                 <p>Question</p>
                 <button className="post_buttonans">Answer it.</button>
             </div>
             <div className="post_answer">
                 <p></p>
             </div>
             <img src="https://cbseneet2019.co.in/wp-content/uploads/2020/09/Computer-Science-Engineering-CSE.jpg" alt="" />

         </div>
         <div className="post_footer">
             <div className="post_footerAction">
                 <ArrowUpwardOutlinedIcon/>
                 <ArrowDownwardOutlinedIcon/>
             </div>
             <RepeatOutlinedIcon/>
             <ChatBubbleOutlinedIcon/>
             <div className="post_footerleft">
                 <ShareOutlined/>
                 <MoreHorizOutlined/>
             </div>
         </div>
            
        </div>
    )
}

export default Post
