import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [produto, setProduto] = React.useState({});

  return (
    <UserContext.Provider value={{ produto, setProduto }}>
      {children}
    </UserContext.Provider>
  );
};
