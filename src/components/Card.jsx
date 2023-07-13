import React from "react";

export default function Card(props) {
  let options = props.options
  let priceOption = Object.keys(options)
  return (
    <div>
      <div>
        <div
          className="card mt-3 bg-green-300"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src={props.imgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <p className="card-text">meal 1</p>
            <div className="container w-100">
              <select name="" id="" className="m-2 h-100  bg-success rounded ">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select name="" id="" className="m-2 h-100  bg-success rounded">
                {priceOption.map((item)=>{
                  return <option key={item} value={item}>{item}</option>
                })}
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
