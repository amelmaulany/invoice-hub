import { cellLoadingStyle, cellStyle, cellTextStyle } from '@/components/shared/table/table';

export const Content = ({ name, number }: { name: string; number: string }) => {
  return (
    <td className={cellStyle}>
      <div className="flex flex-col gap-1">
        <span className={cellTextStyle}>{name}</span>
        <span className="line-clamp-1 text-sm font-semibold text-ellipsis text-neutral-600">
          {number}
        </span>
      </div>
    </td>
  );
};

export const Loading = () => {
  return (
    <td className={cellStyle}>
      <div className="flex animate-pulse flex-col gap-1">
        <div className={cellLoadingStyle} />
        <div className={cellLoadingStyle} />
      </div>
    </td>
  );
};
