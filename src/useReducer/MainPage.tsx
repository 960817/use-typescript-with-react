import React from "react";
import { Admin } from "./Admin";
import AdminBtn from "./AdminBtn";
import AdminInfo from "./AdminInfo";
import Compare from "./Compare";
import OneTake from "./OneTake";
import OnReducer from "./OnReducer";
import ReducerApicall from "./ReducerApicall";
import ReducerTodo from "./ReducerTodo";

const MainPage = () => {
  return (
    <div>
      <Compare />
      <ReducerApicall />
      <ReducerTodo />
      <OnReducer />
      <Admin>
        <AdminInfo />
        <AdminBtn />
      </Admin>
      <OneTake />
    </div>
  );
};

export default MainPage;
