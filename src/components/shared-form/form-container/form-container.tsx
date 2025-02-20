import Button from '@/components/shared/button/button';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';

interface FormContainerProps {
  children: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  submitButton?: {
    label: string;
    startAdornment?: IconProp;
    endAdornment?: IconProp;
  };
}

const FormContainer = ({ children, onSubmit, submitButton }: FormContainerProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-[58px] p-[26px]">
      <div className="grid grid-cols-2 gap-x-[35px] gap-y-[18px]">{children}</div>
      <div className="flex justify-end">
        <Button
          type="submit"
          startAdornment={submitButton?.startAdornment}
          endAdornment={submitButton?.endAdornment}
        >
          {submitButton?.label || 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default FormContainer;
