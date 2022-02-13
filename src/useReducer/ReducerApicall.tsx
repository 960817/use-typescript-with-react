import React, { useEffect, useReducer } from "react";
import { jsonApi } from "../utils/api";

interface Action {
  data?: any;
  error?: any;
  type?: "loading" | "success" | "error";
}
interface State {
  loading: boolean;
  data: any;
  error: any;
}
interface User {
  id: number;
  name: string;
  username: string;
}
const toReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "loading":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "success":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "error":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`unhandled action type ${action.type}`);
  }
};

const ReducerApicall = () => {
  const [state, dispatch] = useReducer(toReducer, {
    loading: false,
    data: null,
    error: null,
  });
  const fetchUsers = async () => {
    dispatch({ type: "loading" });
    try {
      const response = await jsonApi;
      dispatch({ type: "success", data: response.data });
    } catch (e) {
      dispatch({ type: "error", error: e });
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const { loading, data: users, error } = state;
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
};

export default ReducerApicall;
