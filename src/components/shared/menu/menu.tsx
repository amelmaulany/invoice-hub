'use client';
import { MenuItem } from '@/lib/types/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Parent = ({ children }: { children: string }) => {
  return <span className="text-sm ml-5 font-medium text-neutral-500 uppercase">{children}</span>;
};

export const Item = ({ icon, label, path }: MenuItem) => {
  const currentPath = usePathname();
  
  return (
    <Link
      className={`flex items-center gap-3 py-3 px-5 rounded-lg ${currentPath === path ? 'text-white hover:cursor-default' : 'text-neutral-500 hover:cursor-pointer hover:text-neutral-300 hover:bg-slate-700 active:bg-slate-500'}`}
      href={path}
    >
      <FontAwesomeIcon icon={icon} fixedWidth fontSize={18} />
      <span>{label}</span>
    </Link>
  );
};
