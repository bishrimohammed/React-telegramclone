import React from "react";
import img from "../../assets/_F2A3857_1660135787480_1660135869754.JPG";
import "./message.css";
import { useSelector } from "react-redux";
const Message = ({ isyours, data }) => {
  var hour = new Date(data.createdAt);
  const URL = process.env.REACT_APP_server_URL;
  const currentuser = useSelector((state) => state.auth.user);
  useEffect(() => {
    const friendId = data.senderId === currentuser._id ? "": data.senderId
    const getuser = async () => {
      const res = await fetch(`${URL}/api/users/${friendId}`);
      const resdata = await res.json();
      
      
       console.log(resdata);
    };
    getuser();
    if (friendId !== "") getuser()
    if(friendId === "") {return null}

  }, [data]);
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
  const old = (
    <>
      {isyours && (
        <div className=" outmesssage d-flex mb-2 flex-row justify-content-end">
          <div className="px-2 me-3 mb-1 d-flex flex-column  text-white position-relative  bg-primary">
            <p className="small mb-0 ">{data.text}</p>
            <p className="small messageTime   text-white-50  align-self-end">
              {proHours.hours + ":" + proHours.minutes + " " + proHours.mediter}
            </p>
          </div>
          <img src={currentuser.profileimg} alt="avatar 1" className="rounded-circle" />
        </div>
      )}
      {!isyours && (
        <div className="inmessage d-flex flex-row mb-2 justify-content-start">
          <img src={img} alt="avatar 1" className="rounded-circle" />
          <div className="px-2 ms-3 mb-1 position-relative   bg-white ">
            <p className="mb-0 small ">{data.text}</p>
            <p className="small mb-0 messageTime  text-muted ">
              {" "}
              {proHours.hours + ":" + proHours.minutes + " " + proHours.mediter}
            </p>
          </div>
        </div>
      )}
    </>
  );
  return (
    <>
      <div className="direct-chat-messages">
        {isyours && (
          <div className="direct-chat-msg right">
            <div className="direct-chat-infos clearfix">
              <span className="direct-chat-timestamp float-left">
                {proHours.hours +
                  ":" +
                  proHours.minutes +
                  " " +
                  proHours.mediter}
              </span>
            </div>

            <img
              src={img}
              alt="avatar 1"
              className="rounded-circle direct-chat-img"
            />

            <div className="direct-chat-text">{data.text}</div>
          </div>
        )}
        {!isyours && (
          <div className="direct-chat-msg">
            <div className="direct-chat-infos clearfix">
              <span className="direct-chat-timestamp float-right">
                {proHours.hours +
                  ":" +
                  proHours.minutes +
                  " " +
                  proHours.mediter}
              </span>
            </div>

            <img
              src={img}
              alt="avatar 1"
              className="rounded-circle direct-chat-img"
            />

            <div className="direct-chat-text">{data.text}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Message;
