import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css';
import { useDispatchCart, useCart } from './ContextReducer';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
  let navigate = useNavigate();
  let dispatch = useDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let data = useCart();
  let foodItem = props.foodItem;
  const priceRef = useRef();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0] || "");

  const handleAddToCart = async () => {
    let existingFoodItem = data.find((item) => item.id === foodItem._id && item.size === size);

    if (existingFoodItem) {
      await dispatch({
        type: "UPDATE",
        id: foodItem._id,
        price: finalPrice + existingFoodItem.price,
        qty: existingFoodItem.qty + qty
      });
    } else {
      await dispatch({
        type: "ADD",
        id: foodItem._id,
        name: foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
        img: props.ImgSrc
      });
    }
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value || priceOptions[0] || "");
  }, [priceOptions]);

  return (
    <div className="d-flex justify-content-start">
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src={foodItem.img}
          className="card-img-top"
          alt={foodItem.name}
          style={{ height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{foodItem.name}</h5>
          
          <div className="container w-100">
            <div className="row">
              <div className="col">
                <select
                  className="form-select m-2 rounded"
                  onChange={(e) => setQty(Number(e.target.value))}
                  value={qty}
                  style={{ backgroundColor: "#2a9d8f", color: "white" }}  // Button color
                >
                  {Array.from({ length: 6 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                <select
                  className="form-select m-2 rounded"
                  ref={priceRef}
                  onChange={(e) => setSize(e.target.value)}
                  value={size}
                  style={{ backgroundColor: "#2a9d8f", color: "white" }}  // Button color
                >
                  {priceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="d-inline h-100 fs-5" style={{ fontWeight: 'bold' }}>
              ₹{finalPrice}/-
            </div>
          </div>
          <hr />
          <button 
            className="btn justify-center ms-2" 
            onClick={handleAddToCart} 
            style={{ backgroundColor: "#2a9d8f", color: "white" }}  // Button color
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
