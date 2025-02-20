import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type BaseButtonProps = {
  type: 'button';
  children: string;
  startAdornment?: IconProp;
  endAdornment?: IconProp;
  onClick: () => void;
};

type LinkButtonProps = {
  type: 'link';
  children: string;
  startAdornment?: IconProp;
  endAdornment?: IconProp;
  href: string;
};

type SubmitButtonProps = {
  type: 'submit';
  children: string;
  startAdornment?: IconProp;
  endAdornment?: IconProp;
};

type ButtonProps = BaseButtonProps | LinkButtonProps | SubmitButtonProps;

const Button = (props: ButtonProps) => {
  const renderContent = () => (
    <div className="flex items-center justify-center gap-2 bg-blue-800 px-[78px] py-[13px] text-white hover:cursor-pointer hover:bg-blue-900 active:bg-blue-950">
      {props.startAdornment && (
        <FontAwesomeIcon icon={props.startAdornment} fixedWidth fontSize={16} />
      )}
      <span className="text-base font-semibold">{props.children}</span>
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
