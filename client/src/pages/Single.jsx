import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu.jsx'
import Accepted from '../img/icons/Accepted'
import Decline from '../img/icons/Decline'
import Neutral from '../img/icons/Neutral'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import Avatar from "../img/avatar.jpeg"
import ReactQuill from 'react-quill'



const Single = () => {

  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const postId = useLocation().pathname.split("/")[2];
  // console.log(id);
  const {currentUser} = useContext(AuthContext);

  const fetchData = async ()=>{
    try{
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
    }catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchData();
  },[postId]);

  const popUp = () => {
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  const handleDelete = async () => {
    try{
      const res = await axios.delete(`/posts/${postId}`);
      // console.log(res);
      navigate("/")
    }catch(err){
      setError(err.response.data);
      popUp();
      console.log(err);
      
    }
  }
  
 

  // console.log(error);
  return (
    <div className="single">
      <div className="content">
        {post.img && <img src={post.img} alt="" />}
        <div className="user">
          <img src={post.userImg ? post.userImg : Avatar} alt="" />
          <div className="info">
            <span>{post.name}</span>
            <p>{post.date}</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=${post.id}`} state={post}>
              <img src={Edit} alt="" />
            </Link>

            <div className="popup">
              <img onClick={handleDelete} src={Delete} alt="" />
              <span className="popuptext" id="myPopup" onClick={popUp}>
                {error}
              </span>
            </div>

            {/* <img onClick={handleDelete} src={Delete} alt="" /> */}
          </div>
        </div>
        <h1>{post.role}</h1>
        <div className="details">
          <span>{post.company}</span>
          <span>{post.ctc} LPA</span>
          <span>{post.type}</span>
          <span>{post.college}</span>
        </div>
        <div className="info">
          <div className="status">
            {post.status === "Accepted" ? (
              <>
                <Accepted /> <label>Accepted Offer</label>
              </>
            ) : post.status === "Rejected" ? (
              <>
                <Decline />
                <label>Rejected Offer</label>
              </>
            ) : (
              <>
                <Neutral />
                <label>No Offer</label>
              </>
            )}
          </div>

          <div className="status">
            {post.experience === "Positive" ? (
              <>
                <Accepted /> <label>Postive Experience</label>
              </>
            ) : post.experience === "Negative" ? (
              <>
                <Decline />
                <label>Negative Experience</label>
              </>
            ) : (
              <>
                <Neutral />
                <label>Neutral Experience</label>
              </>
            )}
          </div>

          <div className="status">
            {post.level === "Easy" ? (
              <>
                <Accepted /> <label>Easy Interview</label>
              </>
            ) : post.level === "Difficult" ? (
              <>
                <Decline />
                <label>Difficult Interview</label>
              </>
            ) : (
              <>
                <Neutral />
                <label>Average Interview</label>
              </>
            )}
          </div>
        </div>
        <div className="desc">
          <ReactQuill value={post.desc} readOnly={true} theme={"bubble"} />
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Single;