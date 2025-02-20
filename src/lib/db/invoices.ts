import Dexie, { Table } from 'dexie';
import { Invoice } from '@/lib/types/invoice';

export class InvoiceDB extends Dexie {
  invoices!: Table<Invoice, number>; // Ensure correct typing

  constructor() {
    super('invoiceDB');
    this.version(1).stores({
      invoices: '++id, name, invoiceNumber, dueDate, amount, status',
    });
  }
}

const db = new InvoiceDB();
export default db;
