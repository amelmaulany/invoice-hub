import { FieldError, UseFormRegister } from 'react-hook-form';
import { SelectItem } from './select';

export type Invoice = {
  name: string;
  invoiceNumber: string;
  dueDate: Date | null;
  amount: number | null;
  status: SelectItem | null;
};

export type InvoiceFormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = 'name' | 'invoiceNumber' | 'dueDate' | 'amount' | 'status';
