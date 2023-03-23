import { Attachment, MicNoneRounded, Mood } from "@mui/icons-material";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConservation, setMessage } from "../../storeReduxToolkit/authSlice";
import { useEffect } from "react";

const MessageInput = () => {
  const inputValue = useRef();
  const currentuser = useSelector((state) => state.auth.user);
  const isChatSet = useSelector((state) => state.auth.isConseravtionSet);
  const dispatch = useDispatch();
  useEffect(() => {
    inputValue.current.value = "";
  }, [isChatSet]);
  const changeHandler = async (e) => {
    e.preventDefault();
    const formData = {
      conservationId: isChatSet,
      senderId: currentuser._id,
      text: inputValue.current.value,
    };
    const res = await fetch(`http://localhost:4000/api/messages`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    dispatch(setMessage(data));
    dispatch(setConservation({ id: isChatSet, conservation: data }));
    inputValue.current.value = "";
  };
  return (
    <div className="messageInput bg-white w-100 px-3 d-flex align-items-center">
      <div className="text-muted">
        <Attachment />
      </div>
      <div className="flex-grow-1 mx-2">
        <form action="" onSubmit={changeHandler}>
          <input
            ref={inputValue}
            type="text"
            className="form-control-lg w-100 border-0"
            placeholder="write messages..."
          />
        </form>
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
