import React from 'react'
import { Link } from 'react-router-dom';
import Accepted from '../img/icons/Accepted';
import Decline from '../img/icons/Decline';
import Neutral from '../img/icons/Neutral';

const Home = () => {

   const posts = [
    {
      id: 1,
      role: "Associate Software Engineer",
      company: "Capgemini",
      ctc: 8,
      college: "Sardar Patel College Of Engineering",
      type: "On Campus",
      experience: "Positive",
      status: "Accepted",
      level: "Easy",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      role: "Finance Head",
      company: "Axella",
      ctc: 14,
      college: "SPCE",
      type: "On Campus",
      experience: "Negative",
      status: "No",
      level: "Difficult",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      role: "Data Analyst",
      company: "Axis Bank",
      ctc: 8,
      college: "SPCE",
      type: "On Campus",
      experience: "Average",
      status: "Rejected",
      level: "Easy",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      role: "Software Engineer",
      company: "Carwale",
      ctc: 10,
      college: "SPCE",
      type: "On Campus",
      experience: "Positive",
      status: "No",
      level: "Difficult",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

 function type (value) {
    if (value === "Positive" || value === "Easy" || value === "Accepted") return <Accepted />
    else return <Decline />
  }

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
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
              <p>{post.desc}</p>
              <div className="last">
                <button>Read More</button>
                <span>Posted 2 days ago</span>            </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home