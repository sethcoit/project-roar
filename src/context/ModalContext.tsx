import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface ModalContextValue {
  isOpen: boolean;
  source: string;
  openModal: (source?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('Start a Conversation');

  const openModal = useCallback((src?: string) => {
    setSource(src ?? 'Start a Conversation');
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <ModalContext.Provider value={{ isOpen, source, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}
