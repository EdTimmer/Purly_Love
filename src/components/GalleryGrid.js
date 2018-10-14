import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItemText, Divider, ListItem } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import Nav from './Nav';

import w01 from "../images/w01.jpg";
import w02 from "../images/w02.jpg";
import w03 from "../images/w03.jpg";
import w04 from "../images/w04.jpg";
import w05 from "../images/w05.jpg";
import w06 from "../images/w06.jpg";
import w07 from "../images/w07.jpg";
import w08 from "../images/w08.jpg";
import w09 from "../images/w09.jpg";
import w10 from "../images/w10.jpg";
import w11 from "../images/w11.jpg";
import w12 from "../images/w12.jpg";
import w13 from "../images/w13.jpg";
import w14 from "../images/w14.jpg";
import w15 from "../images/w15.jpg";
import w16 from "../images/w16.jpg";
import w17 from "../images/w17.jpg";
import w18 from "../images/w18.jpg";
import w19 from "../images/w19.jpg";
import w20 from "../images/w20.jpg";
import w21 from "../images/w21.jpg";
import w22 from "../images/w22.jpg";
import w23 from "../images/w23.jpg";
import w24 from "../images/w24.jpg";
import w25 from "../images/w25.jpg";
import w26 from "../images/w26.jpg";
import w27 from "../images/w27.jpg";
import w28 from "../images/w28.jpg";
import w29 from "../images/w29.jpg";
import w30 from "../images/w30.jpg";
import w31 from "../images/w31.jpg";
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

class GalleryGrid extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <div className="row" style={{ color: '#fff', backgroundColor: '#282E34', padding: '30px 20px', letterSpacing: '10px', fontSize: '25px' }}>
              <div className="column header" style={{ width: '30%', fontSize: '40px', letterSpacing: 0, textAlign: 'left', paddingLeft: '40px' }}>
                <span>All Items Gallery</span>
              </div>
              <div className="column" style={{ width: '60%', }} />
              <div className="column" style={{ width: '10%', textAlign: 'right' }}>
                <Nav />
              </div>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="column">
            <img src={w01} alt="one" style={{ width: '100%' }} />
            <img src={w03} alt="two" style={{ width: '100%' }} />
            <img src={w05} alt="one" style={{ width: '100%' }} />
            <img src={w07} alt="two" style={{ width: '100%' }} />
            <img src={w09} alt="one" style={{ width: '100%' }} />
            <img src={w11} alt="one" style={{ width: '100%' }} />
            <img src={w13} alt="two" style={{ width: '100%' }} />
            <img src={w15} alt="one" style={{ width: '100%' }} />
            <img src={w17} alt="two" style={{ width: '100%' }} />
            <img src={w19} alt="one" style={{ width: '100%' }} />
            <img src={w21} alt="one" style={{ width: '100%' }} />
            <img src={w23} alt="two" style={{ width: '100%' }} />
            <img src={w25} alt="one" style={{ width: '100%' }} />
            <img src={w27} alt="two" style={{ width: '100%' }} />
            <img src={w29} alt="one" style={{ width: '100%' }} />
            <img src={w31} alt="one" style={{ width: '100%' }} />
            <img src={w33} alt="two" style={{ width: '100%' }} />
            <img src={w35} alt="one" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={w02} alt="three" style={{ width: '100%' }} />
            <img src={w04} alt="four" style={{ width: '100%' }} />
            <img src={w06} alt="one" style={{ width: '100%' }} />
            <img src={w08} alt="two" style={{ width: '100%' }} />
            <img src={w10} alt="two" style={{ width: '100%' }} />
            <img src={w12} alt="three" style={{ width: '100%' }} />
            <img src={w14} alt="four" style={{ width: '100%' }} />
            <img src={w16} alt="one" style={{ width: '100%' }} />
            <img src={w18} alt="two" style={{ width: '100%' }} />
            <img src={w20} alt="two" style={{ width: '100%' }} />
            <img src={w22} alt="three" style={{ width: '100%' }} />
            <img src={w24} alt="four" style={{ width: '100%' }} />
            <img src={w26} alt="one" style={{ width: '100%' }} />
            <img src={w28} alt="two" style={{ width: '100%' }} />
            <img src={w30} alt="two" style={{ width: '100%' }} />
            <img src={w32} alt="three" style={{ width: '100%' }} />
            <img src={w34} alt="four" style={{ width: '100%' }} />
            <img src={w36} alt="one" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryGrid;
