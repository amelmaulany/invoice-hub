import { SnackbarColor } from '@/lib/types/snack-bar';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faExclamation, faX } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

type SnackbarProps = {
  color: SnackbarColor;
  title: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
};

const Snackbar = ({ color, title, description, isOpen, onClose }: SnackbarProps) => {
  const getSnackbarProps = (
    type: 'success' | 'error' | 'info',
  ): {
    style: string;
    icon: IconProp;
  } => {
    switch (type) {
      case 'success':
        return {
          style: 'bg-green-100 border-green-500 text-green-700',
          icon: faCheck,
        };
      case 'error':
        return {
          style: 'bg-red-100 border-red-500 text-red-700',
          icon: faX,
        };
      case 'info':
        return {
          style: 'bg-blue-100 border-blue-500 text-blue-700',
          icon: faExclamation,
        };
      default:
        return {
          style: 'bg-gray-100 border-gray-500 text-gray-700',
          icon: faExclamation,
        };
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 flex w-full max-w-md -translate-x-1/2 items-start gap-3 rounded-lg border-l-4 px-4 py-3 shadow-lg ${getSnackbarProps(color).style}`}
    >
      <FontAwesomeIcon icon={getSnackbarProps(color).icon} fixedWidth fontSize={48} />
      <div>
        <p className="text-sm font-semibold">{title}</p>
        {description && <p className="text-xs">{description}</p>}
      </div>
    </div>
  );
};

export default Snackbar;
