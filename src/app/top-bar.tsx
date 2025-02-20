'use client';

import IconButton from '@/components/shared/icon-button/icon-button';
import ThemeToogle from '@/components/shared/theme-toogle/theme-toogle';
import { faBell, faCommentDots } from '@fortawesome/pro-regular-svg-icons';
import { useState } from 'react';
import ProfileSection from './profile-section';

const Topbar = () => {
  const [isLight, setIsLight] = useState<boolean>(true);
  return (
    <div className="flex h-20 w-full items-center justify-end gap-7 border-b border-neutral-200 px-[30px] py-[17px] shadow-md">
      <ThemeToogle onChange={setIsLight} value={isLight} />
      <div className="flex items-center gap-[30px]">
        <div className="flex items-center gap-[15px]">
          <IconButton icon={faBell} tooltip="Notifications" hasNotification onClick={() => {}} />
          <IconButton icon={faCommentDots} tooltip="Chats" hasNotification onClick={() => {}} />
        </div>
        <ProfileSection memberStatus="Verified Member" name="John Doe" />
      </div>
    </div>
  );
};

export default Topbar;
