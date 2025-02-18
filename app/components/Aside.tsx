import React, {createContext, useContext, useState} from 'react';

type AsideContextType = {
  isOpen: boolean;
  openAside: () => void;
  closeAside: () => void;
};

const AsideContext = createContext<AsideContextType | undefined>(undefined);

export function AsideProvider({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);

  const openAside = () => setIsOpen(true);
  const closeAside = () => setIsOpen(false);

  return (
    <AsideContext.Provider value={{isOpen, openAside, closeAside}}>
      {children}
    </AsideContext.Provider>
  );
}

export function useAside() {
  const context = useContext(AsideContext);
  if (context === undefined) {
    throw new Error('useAside must be used within an AsideProvider');
  }
  return context;
}
