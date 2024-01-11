'use client';

import React, { ReactNode, useState, createContext, useContext } from 'react';
import { links } from '@/lib/data';

type SectionName = (typeof links)[number]['name'];

type ActiveSectionContextProvider = {
  children: ReactNode;
};

type ActiveSectionContextProviderProps = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextProviderProps | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProvider) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used withing an ActiveSectionContextProvider'
    );
  }

  return context;
}
