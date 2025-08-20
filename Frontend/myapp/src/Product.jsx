import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const Product = () => {
  const [data, setData] = useState([]);
  const [selectedRange, setSelectedRange] = useState("All");

  // Calorie mapping for your products
  const calorieMap = {
    "Classic Potato Chips": 150,
    "Ridged Crunch Chips": 160,
    "Tortilla Chips": 140,
    "Veggie Chips": 130,
    "Pita Chips": 155, // avg 150-160
    "Plantain Chips": 160, // avg 150-170
    "Cheese Crisps": 175, // avg 170-180
    "Multi-Grain Chips": 145, // avg 140-150
  };

  // Calorie filter ranges
  const calorieRanges = [
    { label: "All", min: 0, max: Infinity },
    { label: "Under 150 cal", min: 0, max: 150 },
    { label: "150 - 160 cal", min: 150, max: 160 },
    { label: "Above 160 cal", min: 161, max: Infinity },
  ];

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8000/api/products");
    let products = res.data.slice(0, 8);

    // add calories field
    products = products.map((p) => ({
      ...p,
      calories: calorieMap[p.Name] || null,
    }));

    setData(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Apply calorie filter
  const filteredData = data.filter((item) => {
    const range = calorieRanges.find((r) => r.label === selectedRange);
    if (!range) return true;
    return (
      item.calories >= range.min &&
      item.calories <= range.max
    );
  });

  return (
    <>
      <div className="row m-0 p-5 bg-light">
        <div className="col-md-7 col-10 text-center m-auto">
          <h1 id="head_1">
            Our Wholesome{" "}
            <b style={{ color: "rgb(233, 166, 37)" }}>Snack Selection </b>
          </h1>

          <h6 id="head_2">
            Discover our range of nutritious snacks crafted with care from
            farm-fresh ingredients. Each product is made to deliver maximum
            flavor with minimal processing.
          </h6>
        </div>

        {/* Filter Buttons */}
        <div className="col-12 text-center mb-4">
          {calorieRanges.map((range) => (
            <button
              key={range.label}
              className={`btn mx-2 ${
                selectedRange === range.label
                  ? "btn-warning text-light"
                  : "btn-outline-warning"
              }`}
              onClick={() => setSelectedRange(range.label)}
            >
              {range.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="col-12">
          <div className="row m-0 p-0">
            {filteredData.map((val, i) => {
              const f = JSON.parse(val.features);
              return (
                <div
                  className="col-md-3 col-6 col-12 p-3"
                  key={i}
                  style={{ height: "80vh" }}
                >
                  <div
                    className="card h-100 br1"
                    style={{
                      border: "1px solid #FDF7EF",
                      boxShadow: "0 0 5px gray",
                    }}
                  >
                    <div className="card-header h-50 p-0 br1">
                      <img
                        src={val.img}
                        height="100%"
                        className="br1 im1"
                        width="100%"
                        alt=""
                      />
                    </div>
                    <div
                      className="card-body h-50 br1"
                      style={{ backgroundColor: "#FDF7EF" }}
                    >
                      <h4 style={{ height: "10%" }}>{val.Name}</h4>
                      <h6 style={{ height: "20%" }}>{val.Desc}</h6>

                      {/* Show Calories */}
                      {val.calories && (
                        <p style={{height:"5%"}}>
                          <i className="fa-solid fa-fire text-danger"></i>{" "}
                          <b>{val.calories} cal</b>
                        </p>
                      )}

                      {/* Features */}
                      {f.map((val1, i) => (
                        <p key={i} >
                          <i className="fa-solid fa-circle-check text-warning"></i>
                          <b className="mx-3">{val1}</b>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Product;
