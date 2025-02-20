import { ReactNode } from 'react';

type ContentContainerProps = {
  children: ReactNode;
  title: string;
};

const ContentContainer = ({ children, title }: ContentContainerProps) => {
  return (
    <div className="flex h-fit w-[calc(100vw-280px)] flex-col gap-[38px] px-[136px] py-[52px]">
      <span className="text-[26px] font-bold text-slate-900 capitalize">{title}</span>
      <div className="flex h-fit flex-col overflow-auto border border-slate-200 bg-white shadow-md">
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
