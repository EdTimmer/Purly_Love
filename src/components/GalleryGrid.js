import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import yarn from "./yarn.ico";

class GalleryGrid extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div className="row" style={{ color: '#fff', backgroundColor: '#282E34', textAlign: 'center', padding: '50px 50px', letterSpacing: '10px', fontSize: '25px' }}>
              <div className="column" style={{ width: '10%' }}>

              </div>
              <div className="column" style={{ width: '80%' }}>
                <h4>Gallery</h4>
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
