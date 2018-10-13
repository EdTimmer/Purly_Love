import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import yarn from "../images/yarn.ico";
import cat from "../images/cat.png";

class GalleryGrid extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div className="row" style={{ color: '#fff', backgroundColor: '#282E34', textAlign: 'center', padding: '30px 20px', letterSpacing: '10px', fontSize: '25px' }}>
              <div className="column" style={{ width: '10%' }}>
                <Link to={"/"}><img src={cat} width={50} /></Link>
              </div>
              <div className="column header" style={{ width: '80%', fontSize: '40px', letterSpacing: 0 }}>
                <span>Gallery</span>
              </div>
              <div className="column" style={{ textAlight: 'right', width: '10%' }}>
                <Link to={"/"}><img src={yarn} width={50} /></Link>
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
