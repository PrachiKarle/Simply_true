import React from "react";
import "./App.css";

const Snack = () => {
  return (
    <>
      <div
        className="container-fluid m-0 pt-4 pb-2 px-1"
        style={{ backgroundColor: "#FDF7EF" }}
      >
        <h2 id="head_3" className="text-center">
          From Our Farm to Your{" "}
          <b style={{ color: "rgb(233, 166, 37)" }}>Snack</b> Bowl
        </h2>

        <div className="row m-0 p-5">
          <div className="col-md-6 col-12">
            <h6 className="h_1 fw-normal">
              At Crunchy Harvest, we believe snacking should be both delicious
              and nourishing. What began as a small family farm in 2015 has
              grown into a mission to redefine how snacks are made - with
              integrity from soil to shelf.
            </h6>
            <h6 className="h_1 my-3 fw-normal">
              We partner with local organic farms to source only the finest
              ingredients, then craft them into wholesome snacks using
              traditional methods and modern innovation
            </h6>
            <div>
              <h6  className="fw-normal h_1">
                <b className="text-danger b_1 mx-2">✓</b> 100% natural ingredients{" "}
              </h6>
              <h6 className="fw-normal h_1">
                <b className="text-danger b_1 mx-2">✓</b> Small-batch handmade quality
              </h6>
              <h6 className="fw-normal h_1">
                <b className="text-danger b_1 mx-2">✓</b> Eco-friendly packaging
              </h6>
            </div>
            <button className="btn btn-warning px-4 py-2 mt-4" style={{color:"#FDF7EF"}}>More About Us</button>
          </div>
          <div className="col-md-6 col-12">
            <img
              src="snack.avif"
              height="100%"
              width="100%"
              style={{ borderRadius: "25px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Snack;
