import React from "react";

const Margin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="gb yellow col-sm-3 m-auto">
          class m-auto makes div center from both direction by setting it auto
        </div>
        <div className="gb blue col-sm-3">
          If other div is provided than the center will start before that.
        </div>
      </div>
      <div className="row">
        <div className="gb orange col-sm-3 ml-auto">
          ml-auto class can be used to give margin auto from left
        </div>
        <div className="gb blue col-sm-3 ml-auto">Column 2</div>
      </div>
    </div>
  );
};

export default Margin;
