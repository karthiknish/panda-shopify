import React from 'react';
import {createContext, useContext} from 'react';

interface AsideContextType {
  isOpen: boolean;
  openAside: () => void;
  closeAside: () => void;
}

const AsideContext = createContext<AsideContextType | null>(null);

export function AsideProvider({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openAside = () => setIsOpen(true);
  const closeAside = () => setIsOpen(false);

  return (
    <AsideContext.Provider value={{isOpen, openAside, closeAside}}>
      {children}
    </AsideContext.Provider>
  );
}

export default function useAside() {
  const context = useContext(AsideContext);
  if (context === null) {
    throw new Error('useAside must be used within an AsideProvider');
  }
  return context;
}
