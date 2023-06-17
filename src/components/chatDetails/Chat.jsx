import ChatInfo from "./chatInfo";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import "./chat.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Chat = (props) => {
  //const cond = false;
  const isChatSet = useSelector((state) => state.auth.isConseravtionSet);

  return (
    <div className="detail_container   h-100 position-relative">
      {!isChatSet && (
        <div className="noChat">
          <p>select a chat to start messaging</p>
        </div>
      )}
      {isChatSet && (
        <>
          <ChatInfo friendD={props.friend} />
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default Chat;
