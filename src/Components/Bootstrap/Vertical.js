import React from "react";

const Vertical = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-baseline">
        <div className="col-sm-3 pink ">
          <strong>align-items-start</strong> class is used to align item from
          start and there height will be set to the content inside them
        </div>
        <div className="col-sm-3 yellow">
          <strong>align-items-end</strong> class is used to align item from
          bottom.
        </div>
        <div className="col-sm-3 orange">
          <strong>align-items-center</strong> class is used to align item to
          center but the height will be of the biggest div in all scenerios.More
          the content more will be the height of div.
        </div>
        <div className="col-sm-3 blue">
          <strong>align-items-baseline</strong> class is used to align item with the first line of text.
        </div>
      </div>
    </div>
  );
};

export default Vertical;
