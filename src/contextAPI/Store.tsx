import React, { createContext } from "react";

interface UserCon {
  name: string;
  job: string;
}
interface Why {
  children: React.ReactNode;
}

export const UserContext = createContext<UserCon>({ name: "", job: "" });

const Store = ({ children }: Why) => {
  const user = {
    name: "onion",
    job: "developer",
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Store;
