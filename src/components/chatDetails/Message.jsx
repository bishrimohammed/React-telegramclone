import React from "react";
import img from "../../assets/_F2A3857_1660135787480_1660135869754.JPG";
const Message = ({ isyours }) => {
  return (
    <>
      {isyours && (
        <div className=" outmesssage d-flex mb-2 flex-row justify-content-end">
          <div className="px-2 me-3 mb-1 d-flex flex-column  text-white position-relative  bg-primary">
            <p className="small mb-0 ">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem
            </p>
            <p className="small messageTime   text-white-50  align-self-end">
              12:00 PM | Aug 13
            </p>
          </div>
          <img src={img} alt="avatar 1" className="rounded-circle" />
        </div>
      )}
      {!isyours && (
        <div className="inmessage d-flex flex-row mb-2 justify-content-start">
          <img src={img} alt="avatar 1" className="rounded-circle" />
          <div className="px-2 ms-3 mb-1 position-relative   bg-white ">
            <p className="mb-0 small ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              lorem30Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus ea quaerat sunt, delectus
            </p>
            <p className="small mb-0 messageTime  text-muted ">
              12:00 PM | Aug 13
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
