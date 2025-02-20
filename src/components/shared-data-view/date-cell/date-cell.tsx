import { formatJSDateToCellFormat } from '@/utils/date';
import {
  cellLoadingStyle,
  cellNullStyle,
  cellStyle,
  cellTextStyle,
} from '../../shared/table/table';

export const Content = ({ children }: { children: Date | null }) => {
  if (children)
    return (
      <td className={cellStyle}>
        <span className={cellTextStyle}>{formatJSDateToCellFormat(children)}</span>
      </td>
    );
  return;
};

export const Null = () => {
  return (
    <td className={cellStyle}>
      <span className={cellNullStyle}>NULL</span>
    </td>
  );
};

export const Loading = () => {
  return (
    <td className={cellStyle}>
      <div className={cellLoadingStyle} />
    </td>
  );
};
