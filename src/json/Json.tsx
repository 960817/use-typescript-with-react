import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JsonDataContext } from "../contextAPI/ThxtoData";

const Json = () => {
  const context = useContext(JsonDataContext);
  return (
    <>
      <h1>Users</h1>
      {context.map((user) => {
        return (
          <div className="card mb-2">
            <div className="card-body p-3">
              <Link to={`/json/${user.id}`}>{user.name}</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Json;
