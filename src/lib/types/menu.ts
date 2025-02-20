import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type MenuItem = {
  label: string;
  path: string;
  icon: IconProp;
};

export type ParentMenu = {
  label: string;
  children: MenuItem[];
};
