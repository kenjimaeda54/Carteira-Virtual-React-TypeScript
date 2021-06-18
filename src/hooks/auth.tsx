import React, { useState, useContext, createContext } from 'react';

interface IAthProps {
  logged: boolean;
  paramsLogged(email: string, passWord: string): void;
  signOut(): void;
}

const AthContextProvider = createContext<IAthProps>({} as IAthProps);

const AthContext: React.FC = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const userLogged = localStorage.getItem('@minha-carteira:logged');
    //!! se possuir conteúdo retorna true,se não return false
    return !!userLogged;
  });

  const paramsLogged = (email: string, passWord: string) => {
    if (email === 'kenji@gmail.com' && passWord === '123') {
      localStorage.setItem('@minha-carteira:logged', 'true');
      setLogged(true);
    } else {
      alert('Usuario invalido');
    }
  };

  const signOut = () => {
    localStorage.removeItem('@minha-carteira:logged');
    setLogged(false);
  };

  return (
    <AthContextProvider.Provider value={{ logged, paramsLogged, signOut }}>
      {children}
    </AthContextProvider.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useContextAth(): IAthProps {
  const context = useContext(AthContextProvider);
  return context;
}

export { useContextAth, AthContext };
