import { Attachment, MicNoneRounded, Mood } from "@mui/icons-material";

const MessageInput = () => {
  return (
    <div className="messageInput bg-white w-100 px-3 d-flex align-items-center">
      <div className="text-muted">
        <Attachment />
      </div>
      <div className="flex-grow-1 mx-2">
        <input
          type="text"
          className="form-control-lg w-100 border-0"
          placeholder="write messages..."
        />
      </div>
      <div className="me-4 text-muted">
        <Mood />
      </div>
      <div className="text-muted">
        <MicNoneRounded />
      </div>
    </div>
  );
};

export default MessageInput;
