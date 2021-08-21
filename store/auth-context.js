import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  name: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let initialToken = null;
  let initialName = null;

  const [token, setToken] = useState(initialToken);
  const [name, setName] = useState(initialName);

  useEffect(() => {
    initialToken = localStorage.getItem("token");
    initialName = localStorage.getItem("username");
    setToken(initialToken);
    setName(initialName);
  }, []);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, name) => {
    setToken(token);
    setName(name);
    localStorage.setItem("token", token);
    localStorage.setItem("username", name);
  };

  const logoutHandler = () => {
    setToken(null);
    setName(null);
    localStorage.clear();
  };

  const contextValue = {
    token: token,
    name: name,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
