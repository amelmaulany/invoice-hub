import { ReactNode } from 'react';

export type BaseFieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
};

type FieldProps = BaseFieldProps & {
  children: ReactNode;
};

const Field = ({ children, label, required, error }: FieldProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <span className="text-sm font-semibold text-slate-950">{label}</span>
        {required && <span className="text-sm font-semibold text-red-800">*</span>}
      </div>
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
};

export default Field;
