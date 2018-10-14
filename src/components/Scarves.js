import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

import w01 from "../images/w01.jpg";
import w02 from "../images/w02.jpg";
import w08 from "../images/w08.jpg";
import w09 from "../images/w09.jpg";
import w14 from "../images/w14.jpg";
import w16 from "../images/w16.jpg";
import w17 from "../images/w17.jpg";
import w22 from "../images/w22.jpg";
import w24 from "../images/w24.jpg";
import w26 from "../images/w26.jpg";
import w31 from "../images/w31.jpg";


import yarn from "../images/yarn.ico";
import cat from "../images/cat.png";
import homegreen from "../images/homegreen.png";
import homeblue from "../images/homeblue.png";
import homewhite from "../images/homewhite.png";

class Scarves extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <div className="row" style={{ color: '#fff', backgroundColor: '#282E34', padding: '30px 20px', letterSpacing: '10px', fontSize: '25px', }}>
              <div className="column header" style={{ width: '20%', fontSize: '40px', letterSpacing: 0, textAlign: 'left', paddingLeft: '40px' }}>
                <span>Scarves & Shawls</span>
              </div>
              <div className="column" style={{ width: '72%', }} />
              <div className="column" style={{ width: '8%' }}>
                <Nav />
              </div>

            </div>
          </div>
        </div>

        <div className="row" >
          <div className="column">
            <img src={w01} alt="one" style={{ width: '100%' }} />
            <img src={w02} alt="two" style={{ width: '100%' }} />
            <img src={w08} alt="one" style={{ width: '100%' }} />
            <img src={w09} alt="two" style={{ width: '100%' }} />
            <img src={w14} alt="one" style={{ width: '100%' }} />
            <img src={w16} alt="one" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={w17} alt="three" style={{ width: '100%' }} />
            <img src={w22} alt="four" style={{ width: '100%' }} />
            <img src={w24} alt="one" style={{ width: '100%' }} />
            <img src={w26} alt="two" style={{ width: '100%' }} />
            <img src={w31} alt="two" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Scarves;
