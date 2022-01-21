import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [produto, setProduto] = React.useState({});
  const [carrinho, setCarrinho] = React.useState([
    {
      genus: 'Prunus',
      name: 'Apricot',
      id: 35,
      family: 'Rosaceae',
      order: 'Rosales',
      nutritions: {
        carbohydrates: 3.9,
        protein: 0.5,
        fat: 0.1,
        calories: 15,
        sugar: 3.2,
      },
      image: {
        src: 'https://imagens-frexco.vercel.app/damasco.jpg',
        alt: 'Apricot',
      },
      preco: 'R$: 4,97',
    },
    {
      genus: 'Musa',
      name: 'Banana',
      id: 1,
      family: 'Musaceae',
      order: 'Zingiberales',
      nutritions: {
        carbohydrates: 22,
        protein: 1,
        fat: 0.2,
        calories: 96,
        sugar: 17.2,
      },
      image: {
        src: 'https://imagens-frexco.vercel.app/banana.jpg',
        alt: 'Banana',
      },
      preco: 'R$: 2,24',
    },
    {
      genus: 'Rubus',
      name: 'Blackberry',
      id: 64,
      family: 'Rosaceae',
      order: 'Rosales',
      nutritions: {
        carbohydrates: 9,
        protein: 1.3,
        fat: 0.4,
        calories: 40,
        sugar: 4.5,
      },
      image: {
        src: 'https://imagens-frexco.vercel.app/blackberry.jpg',
        alt: 'Blackberry',
      },
      preco: 'R$: 2,38',
    },
  ]);

  return (
    <UserContext.Provider
      value={{ produto, setProduto, carrinho, setCarrinho }}
    >
      {children}
    </UserContext.Provider>
  );
};
