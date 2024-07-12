'use client';

import Menu from '@/components/Menu';
import Terms from '@/components/Terms';
import Terms2 from '@/components/Terms2';
import { createContext, ReactNode, useContext, useReducer } from 'react';

const initialContext: any = {
  showMenu: false,
  showTerms: false,
  showTerms2: false,
};
const PopupContext = createContext(null);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'showMenu':
      return { ...state, showMenu: action.payload };
    case 'showTerms':
      return { ...state, showTerms: action.payload };
    case 'showTerms2':
      return { ...state, showTerms2: action.payload };
    default:
      return state;
  }
};
export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialContext);
  return (
    <>
      <PopupContext.Provider value={{ state, dispatch } as any}>
        {children}
        {state.showMenu && <Menu />}
        {state.showTerms && <Terms />}
        {state.showTerms2 && <Terms2 />}
      </PopupContext.Provider>
    </>
  );
};

export const usePopupContext = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopupContext must be used within an PopupProvider');
  }
  return context;
};
