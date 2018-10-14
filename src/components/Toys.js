import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
//18, 20, 21, 27

import w18 from "../images/w18.jpg";
import w20 from "../images/w20.jpg";
import w21 from "../images/w21.jpg";
import w27 from "../images/w27.jpg";

import yarn from "../images/yarn.ico";
import cat from "../images/cat.png";
import homegreen from "../images/homegreen.png";
import homeblue from "../images/homeblue.png";
import homewhite from "../images/homewhite.png";

class Toys extends Component {
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
                <span>Toys</span>
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
            <img src={w18} alt="one" style={{ width: '100%' }} />
            <img src={w20} alt="two" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={w27} alt="three" style={{ width: '100%' }} />
            <img src={w21} alt="four" style={{ width: '100%' }} />      
          </div>
        </div>
      </div>
    );
  }
}

export default Toys;
