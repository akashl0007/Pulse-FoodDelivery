import React from 'react';
import { Carousel } from 'react-bootstrap';
import f1 from '../images/f1.jpeg';
import f2 from '../images/f2.jpeg';
import f3 from '../images/f3.jpeg';
import './Carousel.css'; // Ensure this CSS file contains your overlay styles

export default function CustomCarousel({ search, setSearch }) {
    return (
        <div className="carousel-container" data-bs-ride="carousel" style={{ objectFit: "contain !important" }} id ='Carousel1'>
            <Carousel fade>
            <Carousel.Item interval={10000}>
                    <div className="carousel-image-wrapper">
                        <img src={f1} className="d-block w-100" alt="Food 1" />
                        <div className="carousel-image-overlay"></div>
                        <div className="search-overlay">
                            <form className="d-flex">
                                <input 
                                    className="form-control me-2" 
                                    type="search" 
                                    placeholder="Search" 
                                    aria-label="Search" 
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)} 
                                />
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-image-wrapper" data-bs-interval="20000">
                        <img src={f2} className="d-block w-100" alt="Food 2" />
                        <div className="carousel-image-overlay"></div>
                        <div className="search-overlay">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-image-wrapper" data-bs-interval="30000">
                        <img src={f3} className="d-block w-100" alt="Food 3" />
                        <div className="carousel-image-overlay"></div>
                        <div className="search-overlay">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
