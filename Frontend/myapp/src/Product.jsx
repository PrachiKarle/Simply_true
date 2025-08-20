import React,{ useEffect, useState } from 'react'
import axios from "axios";
import "./App.css";

const Product = () => {
    const [data, setData] = useState([]);
  const fetchData = async () => {
    var d = await axios.get("http://localhost:8000/api/products");
    var d1=d.data;
    d1=d1.filter((val,i)=>{return i<=7});
    setData(d1);
  };
  useEffect(() => {
    fetchData();
  }, []);
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
        <div className="col-12">
          <div className="row m-0 p-0">
            {data.map((val, i) => {
              // console.log(val.features);
              const f = JSON.parse(val.features);
              //   console.log(f);
              return (
                <>
                  <div
                    className="col-md-3 col-6 col-12 p-3"
                    key={i}
                    style={{height:"70vh"}}
                  >
                    <div className="card h-100 br1" style={{border:"1px solid #FDF7EF",boxShadow:"0 0 5px gray"}}>
                      <div className="card-header h-50 p-0 br1" >
                        <img src={val.img} height="100%" className="br1 im1" width="100%" alt="" />
                      </div>
                      <div
                        className="card-body h-50 br1"
                        style={{ backgroundColor: "#FDF7EF" }}
                      >
                        <h4 style={{height:"20%"}}>{val.Name}</h4>
                        <h6 style={{height:"20%"}}>{val.Desc}</h6>
                        
                        {f.map((val1, i) => {
                          return (
                            <>
                             
                             <p>
                                <i className="fa-solid fa-circle-check text-warning"></i>

                                <b className="mx-3">{val1}</b>
                             </p>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <button
          className="btn btn-warning m-auto text-light my-3"
          style={{ width: "12%" }}
        >
          View All Products
        </button>
      </div>
    </>
  )
}

export default Product