import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      setFoodItem(data[0]);
      setFoodCat(data[1]);
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel search={search} setSearch={setSearch} />
      <div className="container">
        {foodCat.length > 0 && foodCat.map((data) => (
          <div key={data._id} className="row mb-3">
            <div className="fs-3 m-3">
              {data.CategoryName}
            </div>
            <hr />
            {foodItem.length > 0 ? (
              foodItem.filter(item => 
                item.CategoryName === data.CategoryName && 
                item.name.toLowerCase().includes(search.toLowerCase())
              ).map(filteredItem => (
                <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3">
                  <Card 
                    foodItem = {filteredItem}
                    options={filteredItem.options[0]}
                    
                  />
                </div>
              ))
            ) : (
              <div>No Such Data Found</div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
