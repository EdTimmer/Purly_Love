import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import yarn from "../images/yarn.ico";
import cat from "../images/cat.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bgimg-1">
          <div className="caption">
            <span className="borderTwo header" style={{ fontSize: '40px', letterSpacing: 0 }}>Purly Love</span>
          </div>
        </div>

        <div style={{ color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '50px 80px' }}>
          <h3 style={{ textAlign: 'center' }}>About</h3>
          <p>My name is Natalya Timmer.  I knit and teach others how to knit.</p>
          <div>
            <Link to={`/gallerygrid`}>GALLERY</Link>
          </div>
          <br />
          <div>
            <img src={cat} width={100} />
          </div>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>Lessons</span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px' }}>
            <p>I give live classes at Bookmark shop located at ADDRESS.  Class times are TIMES.  To sign up, please call PHONE NUMBER.</p>
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="border" style={{ backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }}>Custom Orders</span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ color: '#ddd', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 80px' }}>
            <p>I also take orders for unique hats, scarfs, shoals, and other items, made per your custom specifications.  To place an order, please email me at EMAIL ADDRESS</p>
          </div>
        </div>

        <div className="bgimg-1">
          <div className="caption">
            <span className="border">Thank you for visiting!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
