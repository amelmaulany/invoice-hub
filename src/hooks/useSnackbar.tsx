'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import Snackbar from '@/components/shared/snack-bar/snack-bar';
import { SnackbarColor } from '@/lib/types/snack-bar';

type SnackbarContextType = {
  showSnackbar: (
    title: string,
    color: SnackbarColor,
    description?: string,
    duration?: number,
  ) => void;
};

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<SnackbarColor>('success');
  const [duration, setDuration] = useState<number>(5000);

  const showSnackbar = (title: string, color: SnackbarColor, description?: string) => {
    setTitle(title);
    setDescription(description);
    setColor(color);
    setOpen(true);
    setDuration(duration);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (open) {
      timeoutId = setTimeout(() => {
        setOpen(false);
      }, duration);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [open, duration]);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {open && (
        <Snackbar
          color={color}
          title={title}
          isOpen={open}
          description={description}
          onClose={closeSnackbar}
        />
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
