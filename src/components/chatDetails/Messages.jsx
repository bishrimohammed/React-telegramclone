import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

const Messages = () => {
  const messages = useSelector((state) => state.auth.Messages);
  const currentuser = useSelector((state) => state.auth.user);
  return (
    <div className="chatDetail px-2">
      <div className="pt-3 position-relative">
        {messages.map((m) => (
          <Message
            key={m._id}
            isyours={m.senderId === currentuser._id}
            data={m}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
