import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import { Link, useLocation } from 'react-router-dom';
import RightSearchBar from '../components/RightSearchBar';
import Accepted from '../img/icons/Accepted';
import Decline from '../img/icons/Decline';
import Neutral from '../img/icons/Neutral';
import moment from "moment";


const Home = () => {

  const [posts, setPosts] = useState([])
  
  const filter = useLocation().search;
  const fetchData = async ()=>{
    try{
      const res = await axios.get(`/posts${filter}`);
      setPosts(res.data);
    }catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchData();
  },[filter])

  function getDate (date) {
    const d = new Date(date);
    return d;
  }

  return (
    <div className="home">
      <div className="posts">
        {posts &&
          posts.map((post) => (
            <div className="post" key={post.id}>
              {/* <div className="img">
              <img src={post.img} alt="" />
            </div> */}
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.role}</h1>
                </Link>
                <div className="details">
                  <span>{post.company}</span>
                  <span>{post.ctc} LPA</span>
                  <span>{post.type}</span>
                  <span>{post.college}</span>
                </div>

                <div className="info">
                  <div className="status">
                    {post.status === "accepted" ? (
                      <>
                        <Accepted /> <label>Accepted Offer</label>
                      </>
                    ) : post.status === "rejected" ? (
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
                    {post.experience === "positive" ? (
                      <>
                        <Accepted /> <label>Postive Experience</label>
                      </>
                    ) : post.experience === "negative" ? (
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
                    {post.level === "easy" ? (
                      <>
                        <Accepted /> <label>Easy Interview</label>
                      </>
                    ) : post.level === "difficult" ? (
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
                  <ReactQuill
                    value={post.desc}
                    readOnly={true}
                    theme={"bubble"}
                    
                  />
                </div>
                <div className="last">
                  <button>Read More</button>
                  <span>
                    {
                      moment(getDate(post.date)).format('LL')
                    }
                  </span>
                </div>
              </div>
            </div>
          ))}
          
      </div>
      <div className="rightbar">
        <RightSearchBar />
      </div>

    </div>
  );
}

export default Home