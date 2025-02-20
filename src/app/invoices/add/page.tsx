import ContentContainer from '@/components/shared/content-container/content-container';
import InvoiceForm from './form';

export const metadata = {
  title: 'Add Invoice',
  description: 'Add Invoice',
};

const AddInvoice = async () => {
  return (
    <ContentContainer title="Add Invoice">
      <div className="border-b border-slate-200 px-[26px] py-[15px]">
        <span className="text-base font-semibold text-slate-900">Invoice Form</span>
      </div>
      <InvoiceForm />
    </ContentContainer>
  );
};

export default AddInvoice;
