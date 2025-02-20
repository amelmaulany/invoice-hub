import { cellLoadingStyle, cellStyle } from '@/components/shared/table/table';
import { InvoiceStatus } from '@/lib/types/invoice-status';
import StatusChip from '../status-chip/status-chip';

export const Content = ({ status }: { status: InvoiceStatus }) => {
  return (
    <td className={cellStyle}>
      <StatusChip status={status} />
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
