import React from "react";

const Nesting = () => {
  return (
    <div className="container-fluid">
      <div>
        <h5>Nesting flow</h5>
        <span>
          If you want column inside another column than we fist have to create
          row div inside that than other column will be inserted.
        </span>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-8">
              <h4>Sub Heading</h4>
              <span>
                loremNostrud ex reprehenderit ad ut sint Lorem excepteur. Id in
                consequat sint dolor ullamco mollit veniam sint. Est magna ad
                officia enim sint duis tempor est sint tempor velit. Excepteur
                Lorem sit irure cupidatat proident esse minim eu consectetur
                dolor. Velit et ex incididunt officia sit excepteur exercitation
                pariatur. Excepteur ullamco minim veniam irure magna veniam anim
                ex tempor occaecat ex esse mollit sint. Occaecat laboris culpa
                consectetur elit magna. Velit ex anim nisi officia esse nostrud
                consectetur nostrud. Occaecat sunt mollit velit nulla irure ea
                pariatur nulla. Lorem veniam ut ex velit incididunt cillum aute
                proident est sit. Reprehenderit do nisi sunt ipsum fugiat do
                ipsum magna ullamco quis. Anim ut sunt ullamco ipsum magna eu
                tempor commodo labore id enim exercitation. Non esse consequat
                irure dolore eiusmod incididunt qui amet fugiat. Eu dolore sunt
                sunt ad reprehenderit fugiat enim Lorem ad.
              </span>
            </div>
            <div className="col-4 rb">
                Side bar
            </div>
          </div>
        </div>
        <div className="col-6 rb"></div>
      </div>
    </div>
  );
};

export default Nesting;
