import { ParentMenu } from '@/lib/types/menu';
import { faList, faPlus } from '@fortawesome/pro-regular-svg-icons';
import en from '@/locales/en.json';

const labels = en.sidebar;

export const menuList: ParentMenu[] = [
  {
    label: labels.invoicing,
    children: [
      {
        label: 'Add Invoice',
        icon: faPlus,
        path: '/invoices/add',
      },
      {
        label: labels.salesInvoices,
        icon: faList,
        path: '/invoices/list',
      },
    ],
  },
];
