import "./App.css";


const Stands = () => {
  const s = [
    {
      id: 1,
      name: "Protein Packed",
      desc: "Each serving delivers 10-15g of plant-based protein to fuel your active lifestyle",
      btn: "Energy that last",
      img: "so1.jpg",
    },
    {
      id: 2,
      name: "Clean Ingredients",
      desc: "Only real, recognizable ingredients - no artificial additives or preservatives",
      btn: "Nature's goodness",
      img: "so2.jpg",
    },
    {
      id: 3,
      name: "Sustainable Snacking",
      desc: "Compostable packaging and carbon-neutral production",
      btn: "Earth-friendly",
      img: "so3.jpg",
    },
  ];
  return (
    <>
      <div className="row m-0 p-5">
        <h2 className="text-center h_2">
          Why Simply True <b style={{ color: "#E9A625" }}>Stands</b> Out
        </h2>
        <h6 className="fw-normal h_1 text-center">
          We're redefining snack time with nutrition-forward, delicious options
          that make healthy eating effortless
        </h6>
      </div>

      <div className="row m-0 px-5 py-4">
        {s.map((val, i) => {
          return (
            <>
              <div className="col-md-4 col-6 p-2">
                <div className="h-100 p-3" style={{backgroundColor:"#FDF7EF",borderRadius:"25px"}}>
                  <img src={val.img} height="50" width="50" alt="" />
                  <h5 className="h_11">{val.name}</h5>
                  <h6 className="fw-normal h_22">{val.desc}</h6>
                  <button className="btn" style={{backgroundColor:"#FBEFDB",color:"rgb(233, 166, 37)"}}>{val.btn}</button>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="row m-0 py-4 text-center">
        <button className="btn btn-warning text-light m-auto" style={{width:"15%"}}>Try our Snacks</button>
      </div>
    </>
  );
};

export default Stands;
