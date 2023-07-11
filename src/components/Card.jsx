import React from "react";

export default function () {
  return (
    <div>
      <div>
        <div
          className="card mt-3 bg-green-300"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFuZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">meal 1</p>
            <div className="container w-100">
              <select name="" id="" className="m-2 h-100  bg-success">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select name="" id="" className="m-2 h-100  bg-success">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
