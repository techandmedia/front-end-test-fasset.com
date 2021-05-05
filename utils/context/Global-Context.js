import { createContext, useReducer } from "react";
import { userReducer } from "../reducers/user-reducer";

const UserContext = createContext(null);

export default function GlobalProvider(props) {
  const [user, dispatchUser] = useReducer(userReducer, {
    serverStatus: false,
  });

  return (
    <UserContext.Provider value={{ user, dispatchUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext };
