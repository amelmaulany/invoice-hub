'use client';
import { MenuItem } from '@/lib/types/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Parent = ({ children }: { children: string }) => {
  return <span className="text-sm font-semibold text-neutral-500">{children}</span>;
};

export const Item = ({ icon, label, path }: MenuItem) => {
  const currentPath = usePathname();
  console.log('currentPath: ', currentPath);
  return (
    <Link
      className={`flex items-center gap-[10px] ${currentPath === path ? 'text-white' : 'text-neutral-500 hover:cursor-pointer hover:text-neutral-300'}`}
      href={path}
    >
      <FontAwesomeIcon icon={icon} fixedWidth fontSize={18} />
      <span>{label}</span>
    </Link>
  );
};
