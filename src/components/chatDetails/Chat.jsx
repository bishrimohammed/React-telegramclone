import ChatInfo from "./chatInfo";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
const Chat = () => {
  return (
    <div className="detail_container   h-100 position-relative">
      <ChatInfo />
      <Messages />
      <MessageInput />
    </div>
  );
};

export default Chat;
