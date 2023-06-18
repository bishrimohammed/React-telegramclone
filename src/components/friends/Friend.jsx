import React, { useEffect, useState } from "react";
import img from "../../assets/_F2A3857_1660135787480_1660135869754.JPG";

const Friend = ({ active, conserv, currentuser }) => {
  const isactive = `${active ? "active" : ""} w-100 `;
  const URL = process.env.REACT_APP_server_URL;
  const [user, setUser] = useState({});
  //console.log(friendId);
  useEffect(() => {
    const friendId = conserv.member.filter(
      (ownId) => ownId !== currentuser._id
    );
    const getuser = async () => {
      const res = await fetch(`${URL}/api/users/${friendId}`);
      const resdata = await res.json();
      //dispatch(setConservations({ consevations: resdata }));
      setUser(resdata);
      // console.log(resdata);
    };
    getuser();
  }, [currentuser, conserv, URL]);
  const handleChange = () => {
    console.log("jhgkhgftr");
  };
  return (
    <li className={isactive}>
      <div className=" d-flex align-items-center py-2 px-1">
        <div className=" me-1">
          <img
            src={user.profileimg}
            width="50"
            height="50"
            alt=""
            className="rounded-circle "
          />
        </div>

        <div className=" ps-0  px-0 flex-grow-1 d-flex justify-content-between  position-relative">
          <div className="d-flex flex-column justify-content-between">
            <p className="mb-0 Namediv">{user.name}</p>
            <p className="mb-0 message">{conserv.lastMessage.lastText}</p>
          </div>
          <div className="d-flex flex-column justify-content-between overflow-hidden">
            <p className="mb-0 day ">10/12/2022</p>
            <div className="badge badge-dark bg-primary rounded-circle badge-pill align-self-end">
              4
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Friend;
