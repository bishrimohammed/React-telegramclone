import React from "react";

const layout = (props) => {
  return (
    <div className="h-100 main_container w-100 flex-grow-1">
      <div className="row h-100 w-100 justify-content-end">
        {props.children}
      </div>
    </div>
  );
};

export default layout;
