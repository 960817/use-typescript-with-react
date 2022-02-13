import React, { createContext, useReducer } from "react";

interface State {
  admin: boolean;
}
interface Action {
  type: string;
}
interface Plz {
  admin: boolean;
  dispatch: React.Dispatch<Action>;
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADMIN":
      return {
        ...state,
        admin: !state.admin,
      };
    default:
      throw new Error();
  }
};

export const AdminContext = createContext<Plz>({
  admin: false,
  dispatch: () => {},
});
export const Admin = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { admin: false });
  const { admin } = state;
  return (
    <AdminContext.Provider value={{ admin, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};
