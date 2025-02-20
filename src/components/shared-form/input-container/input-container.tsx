'use client';

import { ReactNode, useEffect, useState } from 'react';

type InputContainerProps = {
  children: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  error?: string;
  disabled?: boolean;
  onFocus?: (focus: boolean) => void;
};

const InputContainer = ({
  children,
  disabled,
  endAdornment,
  error,
  startAdornment,
  onFocus,
}: InputContainerProps) => {
  const [isFocus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    if (onFocus && isFocus) onFocus(isFocus);
  }, [isFocus, onFocus]);

  return (
    <div
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className={`flex rounded-sm border ${disabled ? 'bg-slate-100' : 'bg-white'} ${isFocus && !error ? 'border-sky-700' : ''} ${!isFocus && !error ? 'border-slate-300' : ''} ${error ? 'border-red-700' : ''}`}
    >
      {startAdornment && (
        <div className="flex w-[81px] items-center justify-center rounded-l-sm">
          {startAdornment}
        </div>
      )}
      <div className="w-full px-[22px] py-[13px]">{children}</div>
      {endAdornment && (
        <div className="flex w-[81px] items-center justify-center rounded-r-sm">{endAdornment}</div>
      )}
    </div>
  );
};

export default InputContainer;
