import React from "react";

const Horizontal = () => {
  return (
    <div className="container-fluid">
      <div>
        <h4>Horizontal Alignment</h4>
        <div>
          Bootstrap uses justify content property to align column horizontally
        </div>
        <div>give bootstrap classes to row div to align them</div>
        <hr />
        <div>
          <h6>Here is some example</h6>
        </div>
        <div className="row justify-content-end">
          <div className="col-sm-3 gb blue">Col 1</div>
          <div className="col-sm-3 gb pink">
            class <strong>justify-content-end</strong> align them to end
          </div>
          <div className="col-sm-3 gb yellow">Col 3</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-3 gb blue">Col 1</div>
          <div className="col-sm-3 gb pink">
            class <strong>justify-content-center</strong> align to center
          </div>
          <div className="col-sm-3 gb yellow">Col 3</div>
        </div>
        <div className="row justify-content-between">
          <div className="col-sm-3 gb blue">Col 1</div>
          <div className="col-sm-3 gb pink">
          class <strong>justify-content-between</strong> align column to have equal space between them
          </div>
          <div className="col-sm-3 gb yellow">Col 3</div>
        </div>
        <div className="row justify-content-md-between">
          <div className="col-sm-3 gb blue">Col 1</div>
          <div className="col-sm-3 gb pink">
          class <strong>justify-content-[break point]-between</strong> align column to have equal space between them and only on above or to that screen size
          </div>
          <div className="col-sm-3 gb yellow">Col 3</div>
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
