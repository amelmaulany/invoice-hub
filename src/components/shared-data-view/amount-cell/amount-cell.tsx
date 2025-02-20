import { formattedAmount } from '@/utils/amount';
import {
  cellLoadingStyle,
  cellNullStyle,
  cellStyle,
  cellTextStyle,
} from '../../shared/table/table';

export const Content = ({ children, currency }: { children: number | null; currency?: string }) => {
  if (children)
    return (
      <td className={cellStyle}>
        <span className={cellTextStyle}>
          {currency} {formattedAmount({ amount: children, locale: 'id-ID' })}
        </span>
      </td>
    );
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
