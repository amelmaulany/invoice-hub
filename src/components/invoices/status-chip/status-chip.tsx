import Chip, { ChipColor } from '@/components/shared/chip/chip';
import { InvoiceStatus } from '@/lib/types/invoice-status';
import _ from 'lodash';

const StatusChip = ({ status }: { status: InvoiceStatus }) => {
  const getColorByStatus = (status: InvoiceStatus): ChipColor => {
    switch (status) {
      case 'paid':
        return 'success';
      case 'pending':
        return 'warning';
      case 'unpaid':
        return 'error';
      default: {
        console.error(`${status} is not implemented yet.`);
        return 'error';
      }
    }
  };

  return <Chip color={getColorByStatus(status)} label={_.capitalize(status)} />;
};

export default StatusChip;
