import db from '@/lib/db/invoices';
import { Invoice } from '@/lib/types/invoice';
import Dexie from 'dexie';

export const useInvoices = () => {
  const queryFunction = async (search: string, page: number, pageSize: number) => {
    const collection = db.invoices as Dexie.Table<Invoice, number>;

    let filteredCollection = collection.toCollection();

    if (search) {
      filteredCollection = filteredCollection.filter(
        (invoice) =>
          invoice.name.toLowerCase().includes(search.toLowerCase()) ||
          invoice.invoiceNumber.includes(search),
      );
    }

    const totalRecords = await filteredCollection.count();
    const paginatedData = await filteredCollection
      .offset((page - 1) * pageSize)
      .limit(pageSize)
      .toArray();

    return { data: paginatedData, total: totalRecords };
  };

  const addInvoice = async (invoice: Invoice) => {
    await db.invoices.add(invoice);
    return queryFunction('', 1, 5); // Refresh with default params
  };

  const deleteInvoice = async (id: number) => {
    await db.invoices.delete(id);
    return queryFunction('', 1, 5);
  };

  return { queryFunction, addInvoice, deleteInvoice };
};
