import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ButtonColor = 'primary' | 'danger' | 'neutral' | 'warning'

type BaseButtonProps = {
  type: 'button';
  children: string;
  startAdornment?: IconProp;
  endAdornment?: IconProp;
  onClick: () => void;
  color?: ButtonColor;
};

type LinkButtonProps = {
  type: 'link';
  children: string;
  startAdornment?: IconProp;
  endAdornment?: IconProp;
  href: string;
  color?: ButtonColor
};

type SubmitButtonProps = {
  type: 'submit';
  children: string;
  startAdornment?: IconProp;
  endAdornment?: IconProp;
  color?: ButtonColor
};

type ButtonProps = BaseButtonProps | LinkButtonProps | SubmitButtonProps;

const Button = (props: ButtonProps) => {
  const getCustomColor = (color?: ButtonColor): string => {
    switch (color) {
      case 'danger': return 'bg-red-700 hover:bg-red-800 active:bg-red-900';
      case 'neutral': return 'bg-black hover:bg-neutral-800 active:bg-neutral-900';
      case 'primary': return 'bg-blue-700 hover:bg-blue-800 active:bg-blue-900'
      case 'warning': return 'bg-yellow-700 hover:bg-yellow-800 active:bg-yellow-900';
      default: return 'bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900';
    }
  }


  const renderContent = () => (
    <div className={`${getCustomColor(props.color)} flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-white hover:cursor-pointer`}>
      {props.startAdornment && (
        <FontAwesomeIcon icon={props.startAdornment} fixedWidth fontSize={16} />
      )}
      <span className="text-sm font-medium">{props.children}</span>
      {props.endAdornment && <FontAwesomeIcon icon={props.endAdornment} fixedWidth fontSize={16} />}
    </div>
  );

  switch (props.type) {
    case 'button':
      return <button onClick={props.onClick}>{renderContent()}</button>;
    case 'link':
      return <a href={props.href}>{renderContent()}</a>;
    case 'submit':
      return <button type="submit">{renderContent()}</button>;
    default:
      break;
  }
};

export default Button;
