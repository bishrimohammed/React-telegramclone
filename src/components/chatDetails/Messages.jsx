import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="chatDetail px-2">
      <div className="pt-3 position-relative">
        <Message isyours={true} />
        <Message isyours={true} />
        <Message isyours={false} />
        <Message isyours={true} />
        <Message isyours={false} />
        <Message isyours={true} />
        <Message isyours={false} />
        <Message isyours={true} />
        <Message isyours={true} />
        <Message isyours={true} />
        <Message isyours={false} />
      </div>
    </div>
  );
};

export default Messages;
