import React from "react";
import { useNavigate } from "react-router-dom";

const Grid = () => {
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/");
  }
  return (
    <div className="container-fluid">
      <div className="row rb">
        <div className="col gb">Website Name</div>
      </div>
      <div className="row rb">
        <div className="col">
          <ul>
            <li onClick={navigateHome}>Home</li>
            <li onClick={navigateHome}>About Us</li>
            <li onClick={navigateHome}>Gallery</li>
            <li onClick={navigateHome}>Products</li>
            <li onClick={navigateHome}>Contanct us</li>
          </ul>
        </div>
      </div>
      <div className="row rb">
        <div className="col-sm-8 gb">
          <h1>Sub Heading</h1>
          <p>
            To use the break point use col-[screen size]-[column size]
            <br />
            Example:- col-md-8
            <br />
            If the screen size is greater than or equal to md than it will have space of 8 column and below that it will take 100% width.
            <br />
            You can use this class for multiple break points example class = " col-lg-8  col-md-4"
            <br/>
            <hr />
            lorem-Est dolor et sit velit nisi aliqua pariatur culpa in laboris
            sit sit. Nostrud sit in eiusmod est. Anim in ex sunt incididunt enim
            qui esse fugiat aliqua cillum sunt velit tempor. lorem-Est dolor et
            sit velit nisi aliqua pariatur culpa in laboris sit sit. Nostrud sit
            in eiusmod est. Anim in ex sunt incididunt enim qui esse fugiat
            aliqua cillum sunt velit tempor.
            <br />
            lorem-Est dolor et sit velit nisi aliqua pariatur culpa in laboris
            sit sit. Nostrud sit in eiusmod est. Anim in ex sunt incididunt enim
            qui esse fugiat aliqua cillum sunt velit tempor. lorem-Est dolor et
            sit velit nisi aliqua pariatur culpa in laboris sit sit. Nostrud sit
            in eiusmod est. Anim in ex sunt incididunt enim qui esse fugiat
            aliqua cillum sunt velit tempor.
            <br />
            lorem-Est dolor et sit velit nisi aliqua pariatur culpa in laboris
            sit sit. Nostrud sit in eiusmod est. Anim in ex sunt incididunt enim
            qui esse fugiat aliqua cillum sunt velit tempor.
          </p>
        </div>
        <div className="col-4 gb">
          <ul>
            <li onClick={navigateHome}>Home</li>
            <li onClick={navigateHome}>About Us</li>
            <li onClick={navigateHome}>Gallery</li>
            <li onClick={navigateHome}>Products</li>
            <li onClick={navigateHome}>Contanct us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grid;
