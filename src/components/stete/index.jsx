import { createContext, useState } from "react";

export const UserContext = createContext();
export const ModeContext = createContext();
export const UsersContext = createContext();

export const ProviderMode = ({ children }) => {
  const [mode, setMode] = useState(true)
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(false);
  return(
    <UsersContext.Provider value={{users, setUsers}}>
      {children}
    </UsersContext.Provider>
  );
};

