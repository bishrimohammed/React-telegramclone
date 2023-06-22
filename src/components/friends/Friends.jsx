import Friend from "./Friend";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMessages,
  reverseConserSet,
} from "../../storeReduxToolkit/authSlice";
function Friends({ conservation, getFriend }) {
  const [currentChat, setCurrentChat] = useState(null);

  // const messages = useSelector((state) => state.auth.Messages);
  const currentuser = useSelector((state) => state.auth.user);
  //const isChatSet = useSelector((state) => state.auth.isConseravtionSet);
  const dispatch = useDispatch();
  //const URL = process.env.REACT_APP_server_URL;
  useEffect(() => {
    var friendId;
    if (currentChat !== null) {
      friendId = currentChat.member.filter(
        (ownId) => ownId !== currentuser._id
      );
    }

    const getMessages = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_server_URL}/api/messages/${currentChat._id}`
      );
      const friend_res = await fetch(
        `${process.env.REACT_APP_server_URL}/api/users/${friendId}`
      );
      const friend_resdata = await friend_res.json();
      const resdata = await res.json();
      dispatch(setMessages({ messages: resdata }));
      //setCurrentChat(resdata);
      // console.log(resdata);
      getFriend(friend_resdata);
    };
    // getuser();
    if (currentChat) getMessages();
  }, [dispatch, currentuser._id, getFriend, currentChat]);
  //console.log(currentChat._id);
  //console.log(messages);
  return (
    <ul className="nav w-100 flex-grow-1  py-0 my-0">
      {conservation.map((conserv) => (
        <div
          className="w-100"
          key={conserv._id}
          onClick={() => {
            // dispatch(setMessages({ messages: [] }));
            dispatch(reverseConserSet(conserv._id));
            if (currentChat !== conserv) setCurrentChat(conserv);
          }}
        >
          <Friend
            key={conserv._id}
            active={currentChat._id === conserv._id}
            conserv={conserv}
            currentuser={currentuser}
          />
        </div>
      ))}
    </ul>
  );
}

export default Friends;
