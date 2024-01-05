import { createContext, useState } from "react";

type ContainerProps = {
  children: React.ReactNode;
};

type UserStateType = {
  loggedIn: boolean;
  user: object;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<object>>;
};

const userStateContextState = {
  loggedIn: false,
  user: {
    id: "",
    name: "",
  },
  setLoggedIn: () => false,
  setUser: () => {},
};

const UserStateContext = createContext<UserStateType>(userStateContextState);

const UserStateProvider = ({ children }: ContainerProps) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<object>({ id: "", name: "" });

  return (
    <UserStateContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      {children}
    </UserStateContext.Provider>
  );
};

export { UserStateContext, UserStateProvider };
