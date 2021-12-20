import { Avatar } from '@material-ui/core'
import React from 'react'
import '../Css/Querybox.css'
function QueryBox() {
    return (
        <div className="Querybox">
            <div className="queryboxinfo">
                <Avatar/>
                <h4>@username</h4>
            </div>
         <div className="querybox_query">
           <p> What's your Question or Link?</p> 
         </div>
        </div>
    )
}

export default QueryBox
