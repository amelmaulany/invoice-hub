import { z } from 'zod';

export const invoiceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  invoiceNumber: z.string().min(1, 'Invoice number is required'),
  dueDate: z.date({ required_error: 'Due date is required' }),
  amount: z.preprocess(
    (val) => (val === null || val === '' ? undefined : Number(val)), // Convert empty value to `undefined`
    z.number({ required_error: 'Amount is required' }).min(1, 'Amount must be at least 1'),
  ),
  status: z.object(
    { label: z.string(), key: z.string() },
    { required_error: 'Status is required' },
  ),
});

export type InvoiceSchema = z.infer<typeof invoiceSchema>;
