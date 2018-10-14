import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//7, 13, 15, 23, 32, 33, 34, 35, 36

import Nav from './Nav';

import w07 from "../images/w07.jpg";
import w13 from "../images/w13.jpg";
import w15 from "../images/w15.jpg";
import w23 from "../images/w23.jpg";
import w32 from "../images/w32.jpg";
import w33 from "../images/w33.jpg";
import w34 from "../images/w34.jpg";
import w35 from "../images/w35.jpg";
import w36 from "../images/w36.jpg";


import yarn from "../images/yarn.ico";
import cat from "../images/cat.png";
import homegreen from "../images/homegreen.png";
import homeblue from "../images/homeblue.png";
import homewhite from "../images/homewhite.png";

class Hats extends Component {
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
                <span>Hats</span>
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
            <img src={w07} alt="one" style={{ width: '100%' }} />
            <img src={w15} alt="two" style={{ width: '100%' }} />
            <img src={w32} alt="one" style={{ width: '100%' }} />
            <img src={w34} alt="two" style={{ width: '100%' }} />
            <img src={w36} alt="one" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={w13} alt="three" style={{ width: '100%' }} />
            <img src={w23} alt="four" style={{ width: '100%' }} />
            <img src={w33} alt="one" style={{ width: '100%' }} />
            <img src={w35} alt="two" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Hats;
