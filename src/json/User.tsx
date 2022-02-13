import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { JsonProps } from "../contextAPI/ThxtoData";

interface UserProps extends JsonProps {
  email: string;
  phone: string;
}
const User = () => {
  const { id } = useParams();
  // const [user, setUser] = useState<UserProps>({ id: "", name: "", email: "", phone: "" });
  const [user, setUser] = useState<UserProps | null>(null);
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  }, []);
  return (
    user && (
      <>
        <h1>{user.name}</h1>
        <h1>{user.id}</h1>
      </>
    )
  );
};

export default User;
