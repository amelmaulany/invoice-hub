import { SelectItem } from '@/lib/types/select';

export const invoiceStatusList: SelectItem[] = [
  {
    key: 'paid',
    label: 'Paid',
  },
  {
    key: 'unpaid',
    label: 'Unpaid',
  },
  {
    key: 'pending',
    label: 'Pending',
  },
];
