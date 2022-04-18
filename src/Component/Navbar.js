import React,{useState} from 'react'

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

import { Avatar, Button, Input} from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import { ExpandMore, Link } from "@material-ui/icons";
import firebase from "firebase/compat/app"
import Modal  from 'react-modal';

function Navbar() {
    const user =useSelector(selectUser)
    const [Ismodalopen,setIsModalOpen]= useState(false)
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const questionName = input;
  
    const handleQuestion = (e) => {
      e.preventDefault();
      setIsModalOpen(false);
  
      if (questionName) {
        db.collection("questions").add({
          user: user,
          question: input,
          imageUrl: inputUrl,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
  
      setInput("");
      setInputUrl("");
    };
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
    <Button onClick={()=> setIsModalOpen(true)} >Ask Question...?</Button>
    <Modal
          isOpen={Ismodalopen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
              overlay: {
                  width: 700,
                  height: 600,
                  backgroundColor: "rgb(20 76 114 / 90%)",
                //   boxShadow: "-9px -20px 83px 8px rgb(20 76 114)",
              
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-250px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
            required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              <Link/>
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>
</div>
        </div>
    )
}

export default Navbar
