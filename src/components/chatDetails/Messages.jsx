import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

const Messages = () => {
  const messages = useSelector((state) => state.auth.Messages);
  const currentuser = useSelector((state) => state.auth.user);
  return (
    <div className="chatDetail px-2">
      <div className="content__body">
        <div className="chat__items">
          {messages.map((m, index) => (
            <Message
              animationDelay={index + 2}
              key={m._id}
              isyours={m.senderId === currentuser._id}
              data={m}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
