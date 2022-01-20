import React from 'react';
import { UserContext } from '../UserContext';

const Produto = () => {
  const { produto } = React.useContext(UserContext);

  return <h1>{produto.name}</h1>;
};

export default Produto;
