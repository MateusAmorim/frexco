import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [produto, setProduto] = React.useState({});
  const [carrinho, setCarrinho] = React.useState([]);

  return (
    <UserContext.Provider
      value={{ produto, setProduto, carrinho, setCarrinho }}
    >
      {children}
    </UserContext.Provider>
  );
};
