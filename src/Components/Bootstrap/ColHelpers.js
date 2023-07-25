import React from "react";

const ColHelpers = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h6>Offset</h6>
          <span>
            Offset is used when you want to skip some column space before
            starting column div because by default it started from the starting
            point.
            <br />
            Example = .offset-md-3
            <br />
            It will skip 3 column space on md or above size.
            <br />
            The number can range from 0-11 only.
            <br />
            If you dont want break points then use offset-[1-12]
          </span>
        </div>
      </div>
      <div className="row">
        <div className="yellow col-lg-5 offset-lg-1">Column 1</div>
        <div className="pink col-lg-5 offset-lg-1">Column 1</div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Reordering</h6>
          <span>
            Reordering is used to change order or column.
            <br />
            We have classes - order-first and order-last to change position.
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col blue">Column 1</div>
        <div className="col orange">Column 2</div>
        <div className="col">Column 3</div>
        <div className="col yellow">Column 4</div>
      </div>
      <span>
        Here is example with order-first and order-last on 3 and 1 column
      </span>
      <div className="row">
        <div className="col blue order-last">Column 1</div>
        <div className="col orange">Column 2</div>
        <div className="col order-first">Column 3</div>
        <div className="col yellow">Column 4</div>
      </div>
      <hr></hr>
      <div>It can be used with break points</div>
      <div>Here is example<strong> order-md-first and order-md-last</strong></div>
      <div>There is no break point for extra small devices</div>
      <div>when defined order with breakpoints then the order will remain changed only to device size that has given or above</div>
      <div>
        here is example of <strong> order-md-first and order-md-last</strong>
      </div>
      <div className="row">
        <div className="col order-md-last blue">Column 1</div>
        <div className="col orange">Column 2</div>
        <div className="col order-md-first">Column 3</div>
        <div className="col yellow">Column 4</div>
      </div>
      <h6>Reordering with number</h6>
      <div>You can set order with class order-[number of order]</div>
      <div>example <strong>order-1, order-2</strong></div>
      <div> With break points example <strong>order-lg-1, order-lg-2</strong></div>
    </div>
  );
};

export default ColHelpers;
