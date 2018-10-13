import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import yarn from "../images/yarn.ico";
import cat from "../images/cat.png";
import homegreen from "../images/homegreen.png";
import homeblue from "../images/homeblue.png";

class GalleryGrid extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <div className="row" style={{ color: '#fff', backgroundColor: '#282E34', padding: '30px 20px', letterSpacing: '10px', fontSize: '25px', textAlign: 'center' }}>
              <div className="column header" style={{ width: '10%', fontSize: '40px', letterSpacing: 0 }}>
                <span>Gallery</span>
              </div>
              <div className="column" style={{ width: '80%', }} />
              <div className="column" style={{ width: '10%' }}>
                <Link to={"/"}><img src={homeblue} width={50} /></Link>
              </div>

            </div>
          </div>
        </div>
        <div className="row" >
          <div className="column">
            <img src={img1} alt="one" style={{ width: '100%' }} />
            <img src={img2} alt="two" style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img src={img3} alt="three" style={{ width: '100%' }} />
            <img src={img4} alt="four" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryGrid;
