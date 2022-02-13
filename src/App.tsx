import React from "react";
import "./App.css";
import Counter from "./Counter";
import Greetings from "./Greetings";
import MyForm from "./MyForm";
import Navbar from "./Navbar";
import TodoList from "./todolist/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./searchbook/Main";
import Json from "./json/Json";
import User from "./json/User";
import Ref from "./ref/Ref";
import UsingMC from "./memo-callback/UsingMC";
import Store from "./contextAPI/Store";
import ThxtoData from "./contextAPI/ThxtoData";
import GrandParent from "./contextAPI/GrandParent";
import MainPage from "./useReducer/MainPage";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <Store>
      <ThxtoData>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Greetings name="onion" age={26} />} />
                <Route path="/counter" element={<Counter />} />
                <Route
                  path="/myform"
                  element={<MyForm onSubmit={onSubmit} />}
                />
                <Route path="/todolist" element={<TodoList />} />
                <Route path="/book" element={<Main />} />
                <Route path="/json" element={<Json />} />
                <Route path="/json/:id" element={<User />} />
                <Route path="/ref" element={<Ref />} />
                <Route path="/memo" element={<UsingMC />} />
                <Route path="/context" element={<GrandParent />} />
                <Route path="/reducer" element={<MainPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThxtoData>
    </Store>
  );
}

export default App;
