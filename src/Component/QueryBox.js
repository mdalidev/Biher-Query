import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import '../Css/Querybox.css'
import  { selectUser } from '../features/userSlice'
function QueryBox() {
    const user = useSelector(selectUser)
    return (
        <div className="Querybox">
            <div className="queryboxinfo">
                <Avatar
                
                src={user.photo}
                />
                <h4>{user.displayName}</h4>
            </div>
         <div className="querybox_query">
           <p> What's your Question or Link?</p> 
         </div>
        </div>
    )
}

export default QueryBox
