import { ParentMenu } from '@/lib/types/menu';
import { faList, faPlus } from '@fortawesome/pro-regular-svg-icons';

export const menuList: ParentMenu[] = [
  {
    label: 'Menu',
    children: [
      {
        label: 'Add Invoice',
        icon: faPlus,
        path: '/invoices/add',
      },
      {
        label: 'My invoices',
        icon: faList,
        path: '/invoices/list',
      },
    ],
  },
];
