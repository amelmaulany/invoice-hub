import { SearchParams } from '@/lib/types/search-params';
import ContentContainer from '@/components/shared/content-container/content-container';
import InvoicesDataView from './data-view';
import en from '@/locales/en.json'

const labels = en.invoices.list

export const metadata = {
  title: labels.meta,
};

const MyInvoices = async ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <ContentContainer title={labels.title}>
      <InvoicesDataView searchParams={searchParams} />
    </ContentContainer>
  );
};

export default MyInvoices;
