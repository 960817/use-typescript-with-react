import React, { createContext, useEffect, useState } from "react";
import { jsonApi } from "../utils/api";
export interface JsonProps {
  name: string;
  id: string;
}
interface Ch {
  children: React.ReactNode;
}
export const JsonDataContext = createContext<JsonProps[]>([]);
const ThxtoData = ({ children }: Ch) => {
  const [jData, setjData] = useState<JsonProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await jsonApi;
        const user = users.data; //await?
        setjData(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return (
    <JsonDataContext.Provider value={jData}>
      {children}
    </JsonDataContext.Provider>
  );
};

export default ThxtoData;
