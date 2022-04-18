import React from 'react'
import '../Css/Navbar.css';
import  logo from './logo.svg'
import  logo1 from './logo1.svg'
import  logo2 from './logo2.svg'
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';

import { Button } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Navbar() {
    const user =useSelector(selectUser)
    return (
        <div className='qheader'>
           <div className="qheader_logo">
             
               <img src="https://www.mycamu.co.in/camu_attachment/get/5b474b68d630906355489d2b" alt="" className='logo' />
               <img src={logo2} alt="" className="logotext" />
               </div>
               <div className="qheadericons">
                   <div className="qheadericon">
                       <HomeIcon/>
                   </div>
                   <div className="qheadericon">
                   <FeaturedPlayListOutlinedIcon/>
                   </div>
                   <div className="qheadericon">
                       <AssignmentTurnedInOutlinedIcon/>
                   </div>
                   <div className="qheadericon">
                       <PeopleAltOutlinedIcon/>
                   </div>
                   <div className="qheadericon">
                       <NotificationsOutlinedIcon/>
                   </div>
                 
               </div>
<div className="qheaderInput">
    <SearchIcon/>
    <input type="search" placeholder="Search Query...." />

</div>
<div className="qheader_rem">
    <div className="qheader_avtar">
        <Avatar
        
      onClick={()=>auth.signOut()}  src={user.photo}
        />
    </div>
    <LanguageIcon/>
    {/* <GTranslateIcon/> */}
    <Button>Ask Question...?</Button>
</div>
        </div>
    )
}

export default Navbar
