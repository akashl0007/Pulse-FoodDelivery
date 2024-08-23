import React from 'react';
import Carousel from './Carousel.css'

export default function Card(props) {
  
  let options = props.options;
  let priceOptions = Object.keys(options)
  return (
    <div className="d-flex justify-content-start">
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt="..."
          style={{ height: "150px", objectFit: "cover" }} // Adjust image height
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          
          <div className='container w-100'>
            <div className="row">
              <div className="col">
                <select className="form-select m-2 bg-success">
                  {Array.from(Array(6), (e, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div className="col">
                <select className="form-select m-2 bg-success">
                  {priceOptions.map((data) => {
                    return <option key={data} value= {data}>{data}</option>
                  }
                  )}
                </select>
              </div>
            </div>
            <div className="d-inline h-100 fs-5" style={{ fontWeight: 'bold' }}>Total price</div>
          </div>
        </div>
      </div>
    </div>
  );
}