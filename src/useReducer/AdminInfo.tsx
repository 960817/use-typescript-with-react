import React, { useContext } from "react";
import { AdminContext } from "./Admin";

const AdminInfo = () => {
  const { admin } = useContext(AdminContext);
  return (
    <div>
      <p>{admin ? "관리자입니다" : "사용자입니다"}</p>
    </div>
  );
};

export default AdminInfo;
