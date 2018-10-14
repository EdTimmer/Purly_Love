import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
//18, 20, 21, 27

import w28 from "../images/w28.jpg";
import w29 from "../images/w29.jpg";

import yarn from "../images/yarn.ico";
import cat from "../images/cat.png";
import homegreen from "../images/homegreen.png";
import homeblue from "../images/homeblue.png";
import homewhite from "../images/homewhite.png";

class Blankets extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <div className="row" style={{ color: '#fff', backgroundColor: '#282E34', padding: '30px 20px', letterSpacing: '10px', fontSize: '25px', }}>
              <div className="column header" style={{ width: '10%', fontSize: '40px', letterSpacing: 0, textAlign: 'left', paddingLeft: '40px' }}>
                <span>Blankets</span>
              </div>
              <div className="column" style={{ width: '82%', }} />
              <div className="column" style={{ width: '8%' }}>
                <Nav />
              </div>

            </div>
          </div>
        </div>
  
        <div className="row" >
          <div className="column">
            <img src={w28} alt="one" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={w29} alt="three" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Blankets;
