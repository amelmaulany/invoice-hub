'use client';

import { SelectItem as SelectItemType } from '@/lib/types/select';
import Field, { BaseFieldProps } from '../field/field';
import InputContainer from '../input-container/input-container';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown, faChevronUp } from '@fortawesome/pro-regular-svg-icons';

type SelectFieldProps = BaseFieldProps & {
  value: SelectItemType | null;
  onChange: (value: SelectItemType | null) => void;
  options: SelectItemType[];
};

const SelectField = (props: SelectFieldProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  const handleClickItem = (option: SelectItemType) => {
    setOpenOptions(false);
    if (option === props.value) props.onChange(null);
    else props.onChange(option);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={rootRef} className="relative flex flex-col">
      <Field {...props}>
        <InputContainer
          {...props}
          onFocus={!Boolean(props.disabled) ? (focus) => setOpenOptions(focus) : undefined}
          endAdornment={
            <FontAwesomeIcon icon={openOptions ? faChevronUp : faChevronDown} fontSize={18} />
          }
        >
          <input
            className="text-base"
            value={props.value?.label || ''}
            readOnly
            placeholder={props.placeholder}
          />
        </InputContainer>
      </Field>
      {openOptions && (
        <div className="absolute -bottom-32 flex h-fit w-full flex-col rounded-sm border border-slate-300 bg-white py-2">
          {props.options.map((option, i) => (
            <SelectItem
              key={i}
              isSelected={option.key === props.value?.key}
              onClick={handleClickItem}
              value={option}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectField;

const SelectItem = ({
  isSelected,
  onClick,
  value,
}: {
  value: SelectItemType;
  onClick: (option: SelectItemType) => void;
  isSelected: boolean;
}) => {
  return (
    <button
      key={value.key}
      onClick={() => onClick(value)}
      className="flex w-full items-center justify-between py-[13px] pr-8 pl-[22px] hover:cursor-pointer hover:bg-slate-100"
    >
      <span className={`text-base ${isSelected ? 'text-sky-700' : 'text-neutral-800'}`}>
        {value.label}
      </span>
      {isSelected && <FontAwesomeIcon icon={faCheck} fontSize={16} className="text-sky-700" />}
    </button>
  );
};
