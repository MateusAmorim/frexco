import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState({});

  return (
    <GlobalContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </GlobalContext.Provider>
  );
};
