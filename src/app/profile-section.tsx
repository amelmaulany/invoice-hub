import { faChevronDown, faChevronUp, faUser } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

type ProfileDropdown = {
  name: string;
  memberStatus: string;
  profilePicture?: string;
};

const ProfileSection = ({ memberStatus, name, profilePicture }: ProfileDropdown) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const renderProfilePicture = (profilePicture?: string) => {
    if (profilePicture)
      return (
        <Image
          src={profilePicture}
          className="h-[46px] w-[46px] rounded-full"
          alt="Profile picture"
        />
      );
    return (
      <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-slate-200 bg-slate-100">
        <FontAwesomeIcon icon={faUser} fixedWidth fontSize={20} className="text-slate-800" />
      </div>
    );
  };
  return (
    <div className="flex items-center gap-[15px]">
      <div className="flex flex-col items-end gap-[1px]">
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-xs font-semibold text-neutral-400">{memberStatus}</span>
      </div>
      <button
        className="flex items-center gap-[10px] hover:cursor-pointer hover:opacity-75"
        onClick={() => setOpen(!isOpen)}
      >
        <div className="flex items-center gap-[10px]">{renderProfilePicture(profilePicture)}</div>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} fixedWidth fontSize={16} />
      </button>
    </div>
  );
};

export default ProfileSection;
