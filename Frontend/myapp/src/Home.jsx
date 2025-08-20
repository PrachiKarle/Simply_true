import React, { useEffect, useState } from "react";
import Product from "./Product";
import Snack from "./Snack";
import Stands from "./Stands";
import MealDay from "./MealDay";

const Home = () => {
  return (
    <>
      <div className="row m-0 p-5" style={{ backgroundColor: "#FDF7EF" }}>
        <div className="col-md-6 col-12 m-0 p-0">
          <h6 id="heading1">CRUNCHY & DELICIOUS</h6>

          <h1 id="heading2">
            Farm-Fresh <b style={{ color: "rgb(233, 166, 37)" }}>Snacks</b> for
            Every Occasion
          </h1>

          <h5 className="fw-normal my-3" id="heading3">
            Discover the authentic taste of nature with our handcrafted chips
          </h5>

          <h5 className="my-3 fw-normal" id="heading4">
            At Crunchy Harvest, we believe snacks should be both delicious and
            nutritious. Our small-batch chips are made from organic, non-GMO
            potatoes grown in sustainable farms. Lightly seasoned with premium
            ingredients and cooked to golden perfection for that perfect crunch
            you'll love.
          </h5>

          <div className="button-group my-2">
            <button
              className="btn btn-warning px-4 py-3 text-light"
              style={{ fontSize: "large" }}
            >
              Explore Our flavours
            </button>
            <button className="btn btn-outline-success px-4 py-3 mx-3">
              Meet our Farmers
            </button>
          </div>

          <div className="col-md-8 col-12">
            <div className="row m-0 p-0">
              <div className="col-md-6 col-12 d-flex mt-3">
                🌱
                <h6 className="fw-normal c1 mx-1">100% Organic</h6>
              </div>
              <div className="col-md-6 col-12 d-flex mt-3">
                🚜
                <h6 className="fw-normal c1 mx-1">Locally Sourced</h6>
              </div>
              <div className="col-md-6 col-12 d-flex mt-3">
                🌎
                <h6 className="fw-normal c1 mx-1">Eco-Friendly</h6>
              </div>
              <div className="col-md-6 col-12 d-flex mt-3">
                🧂
                <h6 className="fw-normal c1 mx-1">No Artificial Flavors</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 m-0 p-5">
          <img
            src="home.avif"
            height="100%"
            width="100%"
            style={{ borderRadius: "25px" }}
            alt=""
          />
        </div>
      </div>

      {/*Features 1: products with filter with calories */}
      <Product />
      {/*Features 2: Meal of day */}
      <MealDay />

      <Snack />

      <Stands />
    </>
  );
};

export default Home;
