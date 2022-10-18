import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Editor from '../editor/Editor.js';
import moment from "moment";


const Write = () => {
  const state = useLocation().state;
  // const [value, setValue] = useState('');

  // console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Role Offered" />
        <input type="text" placeholder="Company Name" />
        <div className="editorContainer">
          <Editor/>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className="file" htmlFor="file">
            Upload Cover Image
          </label>
          <div className="buttons">
            <button>Save as a Draft</button>
            <button>Update</button>
          </div>
        </div>

        <div className="item">
          <div className="details">
          <h1>Details</h1>
          <span><b>CTC Offered</b></span>
          <div className="ctc">
            <input type="number" placeholder="CTC in LPA" />
          </div>
          <span><b>College Name</b></span>
          <div className="college">
            <input type="text" placeholder="Sardar Patel College Of Engineering" />
          </div>
          <span><b>Type Of Placement</b></span>
          <div className="type">
            <select name="placement" id="placement" className="type">
              <option value="oncampus">On Campus</option>
              <option value="offcampus">Off Campus</option>
            </select>
          </div>
          <span><b>How was your Experience?</b></span>
          <div className="experience">
            <select name="experience" id="experience" className="experience">
              <option value="positive">Positive</option>
              <option value="neutral">Neutral</option>
              <option value="negative">Negative</option>
            </select>
          </div>
          <span><b>Offer Status</b></span>
          <div className="status">
            <select name="status" id="status" className="status">
              <option value="accepted">Accepted Offer</option>
              <option value="no">No Offer</option>
              <option value="rejected">Rejected Offer</option>
            </select>
          </div>
          <span><b>Interview Level</b></span>
          <div className="status">
            <select name="level" id="level" className="level">
              <option value="easy">Easy</option>
              <option value="average">Average</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="banking" id="banking" />

            <label htmlFor="banking">Banking</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="banking" id="banking" />

            <label htmlFor="banking">Banking</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="banking" id="banking" />

            <label htmlFor="banking">Banking</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="banking" id="banking" />

            <label htmlFor="banking">Banking</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="banking" id="banking" />

            <label htmlFor="banking">Banking</label>
          </div>  <div className="cat">
            <input type="radio" name="cat" value="banking" id="banking" />

            <label htmlFor="banking">Banking</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write