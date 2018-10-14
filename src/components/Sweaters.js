import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
//3, 4, 5, 10, 11, 25, 35, 36

import w03 from "../images/w03.jpg";
import w04 from "../images/w04.jpg";
import w05 from "../images/w05.jpg";
import w10 from "../images/w10.jpg";
import w11 from "../images/w11.jpg";
import w25 from "../images/w25.jpg";
import w35 from "../images/w35.jpg";
import w36 from "../images/w36.jpg";


import yarn from "../images/yarn.ico";
import cat from "../images/cat.png";
import homegreen from "../images/homegreen.png";
import homeblue from "../images/homeblue.png";
import homewhite from "../images/homewhite.png";

class Sweaters extends Component {
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
                <span>Sweaters</span>
              </div>
              <div className="column" style={{ width: '80%', }} />
              <div className="column" style={{ width: '10%' }}>
                <Nav />
              </div>

            </div>
          </div>
        </div>

        <div className="row" >
          <div className="column">
            <img src={w03} alt="one" style={{ width: '100%' }} />
            <img src={w05} alt="two" style={{ width: '100%' }} />
            <img src={w11} alt="one" style={{ width: '100%' }} />
            <img src={w35} alt="two" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={w04} alt="three" style={{ width: '100%' }} />
            <img src={w10} alt="four" style={{ width: '100%' }} />
            <img src={w25} alt="one" style={{ width: '100%' }} />
            <img src={w36} alt="two" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sweaters;
