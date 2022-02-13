import React from "react";

interface GreetingProps {
  name: string;
  age: number;
}

const Greetings = ({ name, age }: GreetingProps) => {
  const onClick = () => {
    console.log(name, age);
  };
  return (
    <>
      <h1>{name}</h1>
      <h1>Click me</h1>
      <button onClick={() => onClick()}>click!!</button>
    </>
  );
};

export default Greetings;
