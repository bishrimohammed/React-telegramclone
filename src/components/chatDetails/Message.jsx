import React, { useEffect, useState } from "react";

import "./message.css";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const Message = ({ isyours, data }) => {
  var hour = new Date(data.createdAt);
  const currentuser = useSelector((state) => state.auth.user);
  const [friendimgURL, setfriend] = useState("");

  useEffect(() => {
    const friendId = data.senderId === currentuser._id ? "" : data.senderId;
    const getuser = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_server_URL}/api/users/${friendId}`
      );
      const resdata = await res.json();
      setfriend(resdata.profileimg);
    };
    // getuser();
    if (friendId !== "") getuser();
  }, [data, currentuser._id]);

  const getproperHour = (hour, minute) => {
    const hourD = hour - 12;
    const minutes = minute > 9 ? minute : "0" + minute;
    // return hourD
    if (hourD > 0) {
      return {
        hours: Math.abs(hourD),
        mediter: "PM",
        minutes,
      };
    } else {
      return {
        hours: Math.abs(hourD),
        mediter: "AM",
        minutes,
      };
    }
  };
  const proHours = getproperHour(hour.getHours(), hour.getMinutes());
  //console.log(proHours.minutes);

  return (
    <>
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${isyours ? "" : "other"}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{data.text}</div>
          <div className="chat__meta">
            <span>
              {proHours.hours + ":" + proHours.minutes + " " + proHours.mediter}
            </span>
          </div>
        </div>
        <Avatar
          className="avatar"
          src={isyours ? currentuser.profileimg : friendimgURL}
        />
      </div>
    </>
  );
};

export default Message;
