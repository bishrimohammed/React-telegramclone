import React from "react";
import img from "../../assets/_F2A3857_1660135787480_1660135869754.JPG";
const Friend = ({ active }) => {
  const isactive = `${active ? "active" : ""} w-100`;
  return (
    <li className={isactive}>
      <div className="row align-items-center p-2">
        <div className="col-md-3 ">
          <img
            src={img}
            width="50"
            height="50"
            alt=""
            className="rounded-circle "
          />
        </div>

        <div className=" ps-0 col-md-9  position-relative">
          <div className="d-flex  align-items-center">
            <p className="mb-0 Namediv">Bishri Mohammed</p>
            <p className="mb-0 day ms-auto">10/12/2022</p>
          </div>
          <div className="d-flex align-items-center overflow-hidden">
            <p className="mb-0 message">
              message Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            <div className="badge badge-dark bg-primary rounded-circle badge-pill">
              4
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Friend;
