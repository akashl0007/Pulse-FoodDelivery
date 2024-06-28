import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Carousal() {
  return (
    <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="mernapp\resources\Carousal imgs\burger.jpeg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="mernapp\resources\Carousal imgs\pastry.jpeg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="mernapp\resources\Carousal imgs\barbeque.jpeg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
