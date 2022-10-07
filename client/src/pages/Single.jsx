import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu.jsx'
import Accepted from '../img/icons/Accepted'
import Decline from '../img/icons/Decline'
import Neutral from '../img/icons/Neutral'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Software Developer</h1>
        <div className="details">
          <span>Bank of America</span>
          <span>25-30 LPA</span>
          <span>Off Campus</span>
          <span>Sardar Patel College Of Engineering</span>
        </div>
        <div className="info">
          <div className="status">
            <Accepted />
            <label>Accepted Offer</label>
          </div>
          <div className="status">
            <Decline />
            <label>Negative Experience</label>
          </div>
          <div className="status">
            <Neutral />
            <label>Average Interview</label>
          </div>
        </div>
        <p className="desc">
          <p>
            <strong>Eligibility :</strong>&nbsp;6 CGPA &amp; above
          </p>
          <p>
            <strong>Rounds:&nbsp;</strong>Total 3
          </p>
          <p>
            <strong>Round 1:&nbsp;</strong>HireVue Round
          </p>
          <ul>
            <li>
              The test was conducted on the Hirevue platform. Total 5 questions
              were there on the test(2 HR+2 Coding+1 Tech). I basically had to
              record my answers and submit them within a given time(read about
              Hirevue on google)
            </li>
            <li>
              How do you think your academic qualifications and extracurricular
              align with the profile you are applying for?
            </li>
            <li>
              https://www.tutorialride.com/c-strings-program/display-alternate-character-of-string-in-upper-case.htm
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/count-possible-decodings-given-digit-sequence/"
                rel="noopener noreferrer"
                target="_blank"
                // style="color: var(--color-gfg);"
              >
                https://www.geeksforgeeks.org/count-possible-decodings-given-digit-sequence/
              </a>
            </li>
            <li>
              Explain the approach that you followed in 2nd question. What are
              the other approaches that you could follow? ( Ans. Had to explain
              the code and the time complexity)
            </li>
          </ul>
          <p>
            <strong>Round 2:&nbsp;</strong>Technical Interview
          </p>
          <ul>
            <li>Tell me about yourself.</li>
            <li>
              Tell me about your project in detail ( tech used+ your role+why
              these techs)
            </li>
            <li>WAF to reverse string</li>
            <li>WAP to call private data members of the class in the main</li>
            <li>How to create objects</li>
            <li>
              SQL Queries(substring, display max salary, greater than operator,
              count)
            </li>
            <li>Normalization</li>
            <li>
              Puzzle- 3bulbes,3switches (google it you’ll get the exact same
              question)
            </li>
            <li>Any plan for higher studies?</li>
            <li>Do you want to ask anything?</li>
          </ul>
          <p>
            <strong>Round 3:&nbsp;</strong>HR Interview
          </p>
          <ul>
            <li>Tell me about yourself and your family background.</li>
            <li>Why did you do BTech</li>
            <li>Your project (why this project only nothing else)</li>
            <li>Are you satisfied with how your project looks now?</li>
            <li>Team player or work alone?</li>
            <li>Strengths and weaknesses</li>
            <li>Questions on extracurriculars written in resume</li>
            <li>
              Difficulties while working in a team(mine was a group project that
              is why)
            </li>
            <li>Do you want to ask anything?</li>
            <li>
              Some students had 2 Tech interviews, it is completely dependent
              upon the interviewer.
            </li>
          </ul>
          <p>
            <strong>Verdict:&nbsp;</strong>Selected
          </p>
          <p>
            <strong>Tips:</strong>
          </p>
          <ul>
            <li>Only write things you very well know in your resume.</li>
            <li>Be well versed with the concepts of the subjects.</li>
            <li>Have stronghold on the DSA concepts.</li>
            <li>Be confident and keep smiling.</li>
          </ul>
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;