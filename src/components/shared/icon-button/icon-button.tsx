import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type IconButtonProps = {
  icon: IconProp;
  onClick?: () => void;
  tooltip: string;
  hasNotification?: boolean;
};

const IconButton = ({ icon, tooltip, onClick, hasNotification }: IconButtonProps) => {
  return (
    <button
      title={tooltip}
      onClick={onClick}
      disabled={!onClick}
      className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full border border-slate-200 bg-slate-100 p-2 hover:cursor-pointer hover:bg-slate-200 hover:disabled:bg-slate-100"
    >
      <FontAwesomeIcon icon={icon} fixedWidth fontSize={18} className="text-slate-500" />
      {hasNotification && (
        <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-600" />
      )}
    </button>
  );
};

export default IconButton;
