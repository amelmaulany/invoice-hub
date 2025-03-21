import { ReactNode } from 'react';

type ContentContainerProps = {
  children: ReactNode;
  title: string;
};

const ContentContainer = ({ children, title }: ContentContainerProps) => {
  return (
    <div className="flex flex-col gap-10 py-5 px-8">
      <span className="text-[26px] font-bold text-slate-900 capitalize">{title}</span>
      <div className="overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
