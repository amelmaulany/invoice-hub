import * as Switch from '@radix-ui/react-switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/pro-regular-svg-icons';

type ThemeToogleProps = {
  value: boolean;
  onChange: (newValue: boolean) => void;
};

const ThemeToogle = ({ onChange, value }: ThemeToogleProps) => {
  return (
    <Switch.Root
      checked={value}
      onCheckedChange={onChange}
      className="h-[30px] w-14 rounded-full bg-slate-600 hover:cursor-pointer data-[state=checked]:bg-slate-200"
    >
      <Switch.Thumb className="relative block h-6 w-6 translate-x-7 rounded-full bg-white shadow transition-all will-change-transform data-[state=checked]:translate-x-0.5">
        <FontAwesomeIcon
          icon={value ? faSun : faMoon}
          fixedWidth
          fontSize={14}
          className="text-slate-400"
        />
      </Switch.Thumb>
    </Switch.Root>
  );
};

export default ThemeToogle;
