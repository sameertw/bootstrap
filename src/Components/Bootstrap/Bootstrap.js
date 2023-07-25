import "./style.css";
import { useNavigate } from "react-router-dom";
/**
 * @flow
 * 1. container
 * 2. row
 * 3. col
 *
 */
const Bootstrap = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col"> col 1 </div>
        <div className="col"> col 2 </div>
        {/* break div */}
        <div className="w-100"></div>
        <div className="col"> col 3 </div>
        <div className="col"> col 4 </div>
        <div className="w-100"></div>
        <div className="col"> col 5 </div>
      </div>
      {/* to make column with equal number add class row-cols-2 ==> 2 is the number to column to be in a single raw */}
      <div className="row row-cols-2">
        <div className="w-100">
          {" "}
          <h6>Columns with equal width and with specific number</h6>
        </div>
        <div className="col">col 1</div>
        <div className="col">col 2</div>
        <div className="col">col 3</div>
      </div>
      <div className="row">
        <div className="w-100">
          <h6>
            If we want to make width to 100% at a fix size then add col-md class
            to columns this will give equal width to divs when they are above or
            equal md and 100% when they come below md size
          </h6>
        </div>
        <div className="col-md"> col 1</div>
        <div className="col-md"> col 2</div>
        <div className="col-md"> col 3</div>
      </div>
      <div className="row">
        <div className="w-100">
          <span>
            Here is grid system bootstrap have 12 column width you can specify
            col-n, where n can be of any number below 12. To sum of all divs
            inside a single row then there sum must be less than 12. If it
            increaes then the lasts divs which are giving sum more then 12 will
            go on next line
          </span>
        </div>
        <div className="col-7 gb">column 1</div>
        <div className="col-3 gb">column 2</div>
        <div className="col-2 gb">column 3</div>
        <button
          className="btn btn-primary"
          style={{ width: "150px" }}
          onClick={() => navigate("/grid")}
        >
          Sample
        </button>
      </div>
      <div className="row">
        <div className="col-6 gb topics" style={{ padding: "10px" }}>
          <span>Col class helpers</span>
          <button
            className="btn btn-primary col-helper"
            onClick={() => navigate("/col-helper")}
          >
            See More
          </button>
        </div>
        <div className="col-6 gb topics" style={{ padding: "10px" }}>
          <span>Nesting</span>
          <button
            className="btn btn-primary col-helper"
            onClick={() => navigate("/nesting")}
          >
           See More
          </button>
        </div>
        <div className="col-6 gb topics" style={{ padding: "10px" }}>
          <span>Nesting</span>
          <button
            className="btn btn-primary col-helper"
            onClick={() => navigate("/margin")}
          >
            See More
          </button>
        </div>
        <div className="col-6 gb topics" style={{ padding: "10px" }}>
          <span>Horizontal Alignment</span>
          <button
            className="btn btn-primary col-helper"
            onClick={() => navigate("/horizontal")}
          >
           See More
          </button>
        </div>
        <div className="col-6 gb topics" style={{ padding: "10px" }}>
          <span>Vertical Alignment</span>
          <button
            className="btn btn-primary col-helper"
            onClick={() => navigate("/vertical")}
          >
             See More
          </button>
        </div>
        <div className="col-6 gb topics" style={{ padding: "10px" }}>
          <span>Flex Directions</span>
          <button
            className="btn btn-primary col-helper"
            onClick={() => navigate("/flex-direction")}
          >
             See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bootstrap;
