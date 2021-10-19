import { createContext, useContext } from 'react';

export const UserContext = createContext(null);

export const useUser = () => {
    console.log(useContext(UserContext));
  return useContext(UserContext);
};