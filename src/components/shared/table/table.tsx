import { ReactNode } from 'react';

export const cellStyle = 'px-[30px] py-[14px]';
export const cellTextStyle = 'line-clamp-1 text-base text-ellipsis text-neutral-800';
export const cellNullStyle = 'text-base text-neutral-400';
export const cellLoadingStyle = 'h-5 w-full min-w-6 rounded-md bg-neutral-100 animate-pulse';
export type ColumnAlign = 'left' | 'center' | 'right';

export const Root = ({ children }: { children: ReactNode }) => {
  return <table className="w-full">{children}</table>;
};

export const Head = ({ children }: { children: ReactNode }) => {
  return <thead className="bg-slate-200">{children}</thead>;
};

export const Th = ({
  children,
  colAlign = 'left',
}: {
  children: string;
  colAlign?: ColumnAlign;
}) => {
  const getTextAlign = (colAlign: ColumnAlign) => {
    switch (colAlign) {
      case 'left':
        return 'text-left';
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default: {
        console.error(`${colAlign} is not implemented yet.`);
        return 'text-left';
      }
    }
  };
  return (
    <th
      className={`px-[30px] py-[15px] text-left text-base uppercase font-medium text-neutral-800 ${getTextAlign(colAlign)}`}
    >
      {children}
    </th>
  );
};

export const Body = ({ children }: { children: ReactNode }) => {
  return <tbody className="bg-white">{children}</tbody>;
};

export const Tr = ({ children }: { children: ReactNode }) => {
  return <tr className="border-b border-b-slate-200 last:border-b-transparent">{children}</tr>;
};
