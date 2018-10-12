import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 1,
      modalDisplay: 'none'
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showSlides = this.showSlides.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
  }

  // Open the Modal
  openModal() {
    this.setState({ modalDisplay: 'block' })
    // document.getElementById('myModal').style.display = "block";
  }

  // Close the Modal
  closeModal() {
    // document.getElementById('myModal').style.display = "none";
    this.setState({ modalDisplay: 'none' })
  }


  // showSlides(slideIndex);

  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.state.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.state.slideIndex = n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { this.state.slideIndex = 1 }
    if (n < 1) { this.state.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.state.slideIndex - 1].style.display = "block";
    dots[this.state.slideIndex - 1].className += " active";
    captionText.innerHTML = dots[this.state.slideIndex - 1].alt;
  }



  render() {
    const { openModal, closeModal, showSlides, plusSlides, currentSlide } = this;
    return (
      <div>

        <div>
          <Link to={`/`}>Home</Link>
        </div>

        <div className="row">
          <div className="column">
            <img src="../../public/images/img1.jpg" onClick={openModal()} onClick={currentSlide(1)} className="hover-shadow" />
          </div>
          <div className="column">
            <img src="../../public/images/img2.jpg" onClick={openModal()} onClick={currentSlide(2)} className="hover-shadow" />
          </div>
          <div className="column">
            <img src="../../public/images/img3.jpg" onClick={openModal()} onClick={currentSlide(3)} className="hover-shadow" />
          </div>
          <div className="column">
            <img src="../../public/images/img4.jpg" onClick={openModal()} onClick={currentSlide(4)} className="hover-shadow" />
          </div>
        </div>

        {/* The Modal/Lightbox */}
        <div id="myModal" className="modal" style={{ display: `${this.state.modalDisplay}` }}>
          <span className="close cursor" onClick={closeModal()}>&times;</span>
          <div className="modal-content">

            <div className="mySlides">
              <div className="numbertext">1 / 4</div>
              <img src="img1_wide.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
              <div className="numbertext">2 / 4</div>
              <img src="img2_wide.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
              <div className="numbertext">3 / 4</div>
              <img src="img3_wide.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
              <div className="numbertext">4 / 4</div>
              <img src="img4_wide.jpg" style={{ width: '100%' }} />
            </div>

            {/* Next/previous controls */}
            <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={plusSlides(1)}>&#10095;</a>

            {/* Caption text */}
            <div className="caption-container">
              <p id="caption"></p>
            </div>

            {/* Thumbnail image controls */}
            <div className="column">
              <img className="demo" src="../../public/images/img1.jpg" onClick={currentSlide(1)} alt="Nature" />
            </div>

            <div className="column">
              <img className="demo" src="../../public/images/img2.jpg" onClick={currentSlide(2)} alt="Snow" />
            </div>

            <div className="column">
              <img className="demo" src="../../public/images/img3.jpg" onClick={currentSlide(3)} alt="Mountains" />
            </div>

            <div className="column">
              <img className="demo" src="../../public/images/img4.jpg" onClick={currentSlide(4)} alt="Lights" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
