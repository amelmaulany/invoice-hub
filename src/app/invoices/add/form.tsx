'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InvoiceSchema, invoiceSchema } from '@/lib/schemas/invoice';
import DateField from '@/components/shared-form/date-field/date-field';
import FormContainer from '@/components/shared-form/form-container/form-container';
import NumberField from '@/components/shared-form/number-field/number-field';
import SelectField from '@/components/shared-form/select-field/select-field';
import TextField from '@/components/shared-form/text-field/text-field';
import { invoiceStatusList } from '@/constants/invoice-status';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { useInvoices } from '@/hooks/useInvoices';
import { useSnackbar } from '@/hooks/useSnackbar';
import { useRouter } from 'next/navigation';

const InvoiceForm = () => {
  const { addInvoice } = useInvoices();
  const { showSnackbar } = useSnackbar();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceSchema>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      name: '',
      invoiceNumber: '',
      dueDate: undefined,
      amount: undefined,
      status: undefined,
    },
  });

  const onSubmit = (data: InvoiceSchema) => {
    addInvoice(data);
    showSnackbar(
      'Invoice added successfully!',
      'success',
      `You can view and manage your invoice in the 'My Invoices' section.`,
    );
    router.push('/invoices/list');
  };

  return (
    <FormContainer
      onSubmit={handleSubmit(onSubmit)}
      submitButton={{
        label: 'Add invoice',
        startAdornment: faPlus,
      }}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            placeholder="Enter your invoice name"
            required
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        name="invoiceNumber"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Number"
            placeholder="Enter your invoice number"
            required
            error={errors.invoiceNumber?.message}
          />
        )}
      />

      <Controller
        name="dueDate"
        control={control}
        render={({ field }) => (
          <DateField
            {...field}
            label="Due Date"
            placeholder="DD/MM/YYYY"
            required
            error={errors.dueDate?.message}
          />
        )}
      />

      <Controller
        name="amount"
        control={control}
        render={({ field }) => (
          <NumberField
            {...field}
            label="Amount"
            prefix="Rp"
            placeholder="Enter amount"
            required
            min={1}
            error={errors.amount?.message}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <SelectField
            key="status"
            {...field}
            label="Status"
            options={invoiceStatusList}
            placeholder="Choose the status"
            required
            error={errors.status?.message}
          />
        )}
      />
    </FormContainer>
  );
};

export default InvoiceForm;
