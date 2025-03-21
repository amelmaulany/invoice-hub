import Image from 'next/image';
import Logo from '../../public/logo.svg';
import { menuList } from '@/constants/menu';
import * as Menu from '@/components/shared/menu/menu';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex h-screen w-[280px] flex-col gap-12 bg-[#1C2434] px-2 py-7">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={166} height={45} className="h-[45px] w-[166px] ml-5" />
      </Link>

      <div className="flex flex-col gap-8">
        {menuList.map((menu, i) => (
          <div className="flex flex-col gap-[17px]" key={i}>
            <Menu.Parent>{menu.label}</Menu.Parent>

            <div className="flex flex-col">
              {menu.children.map((menuItem, i) => (
                <Menu.Item key={i} {...menuItem} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
