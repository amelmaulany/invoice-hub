import { SearchParams } from '@/lib/types/search-params';
import ContentContainer from '@/components/shared/content-container/content-container';
import InvoicesDataView from './data-view';

export const metadata = {
  title: 'My Invoices',
  description: 'My Invoices',
};

const MyInvoices = async ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <ContentContainer title="My Invoices">
      <InvoicesDataView searchParams={searchParams} />
    </ContentContainer>
  );
};

export default MyInvoices;
