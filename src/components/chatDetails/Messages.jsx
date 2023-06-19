import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import { Grid, List } from "@mui/material";

const Messages = () => {
  const messages = useSelector((state) => state.auth.Messages);
  const currentuser = useSelector((state) => state.auth.user);
  return (
    <div className="chatDetail px-2">      
        <Grid item xs={9}>
          <List>
            {messages.map((m) => (
          <Message
            key={m._id}
            isyours={m.senderId === currentuser._id}
            data={m}
          />
        ))}
          </List>
       
      </Grid>
        
      
    </div>
  );
};

export default Messages;
