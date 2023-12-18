import { createContext, useState } from "react";

type ContainerProps = {
  children: React.ReactNode;
};

type UserStateType = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const userStateContextState = {
  loggedIn: false,
  setLoggedIn: () => false,
};

const UserStateContext = createContext<UserStateType>(userStateContextState);

const UserStateProvider = ({ children }: ContainerProps) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <UserStateContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserStateContext.Provider>
  );
};

export { UserStateContext, UserStateProvider };
