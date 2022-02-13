import React, { useContext } from "react";
import { AdminContext } from "./Admin";

const AdminBtn = () => {
  const { dispatch } = useContext(AdminContext);
  const on = () => {
    dispatch({
      type: "ADMIN",
    });
  };
  return (
    <div>
      <button onClick={on}>전환</button>
    </div>
  );
};

export default AdminBtn;
