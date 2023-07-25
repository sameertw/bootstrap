import React from "react";

const Company = () => {
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 id="logo">Company Name</h1>
            </div>
            <div className="col-md-8">
              <ul id="menu" className="float-md-right">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
