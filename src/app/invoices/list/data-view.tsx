'use client';

import { SearchParams } from '@/lib/types/search-params';

import * as InvoiceCell from '@/components/invoices/invoice-cell/invoice-cell';
import * as DateCell from '@/components/shared-data-view/date-cell/date-cell';
import * as InvoiceStatusCell from '@/components/invoices/status-cell/status-cell';
import * as AmountCell from '@/components/shared-data-view/amount-cell/amount-cell';
import { InvoiceStatus } from '@/lib/types/invoice-status';
import DataView, { DataViewColumn } from '@/components/shared-data-view/data-view/data-view';
import { Invoice } from '@/lib/types/invoice';
import { useInvoices } from '@/hooks/useInvoices';

type InvoiceDataViewProps = {
  searchParams: SearchParams;
};

const InvoicesDataView = ({ searchParams }: InvoiceDataViewProps) => {
  const { queryFunction } = useInvoices();

  const columns: DataViewColumn<Invoice>[] = [
    {
      key: 'name',
      label: 'Invoice',
      cell: (_, row) => <InvoiceCell.Content name={row.name} number={row.invoiceNumber} />,
      cellSkeleton: <InvoiceCell.Loading />,
    },
    {
      key: 'dueDate',
      label: 'Due Date',
      cell: (_, row) => <DateCell.Content>{row.dueDate}</DateCell.Content>,
      cellSkeleton: <DateCell.Loading />,
    },
    {
      key: 'status',
      label: 'Status',
      cell: (_, row) => <InvoiceStatusCell.Content status={row.status?.key as InvoiceStatus} />,
      cellSkeleton: <InvoiceStatusCell.Loading />,
    },
    {
      key: 'amount',
      label: 'Amount',
      cell: (_, row) => <AmountCell.Content>{row.amount}</AmountCell.Content>,
      cellSkeleton: <AmountCell.Loading />,
    },
  ];

  return (
    <DataView columns={columns} initialParameters={searchParams} queryFunction={queryFunction} />
  );
};

export default InvoicesDataView;
