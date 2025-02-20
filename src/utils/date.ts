import { DateTime } from 'luxon';

export const formatJSDateToYearMonthDate = (date: Date | null) => {
  return date ? DateTime.fromJSDate(date).toFormat('yyyy-LL-dd') : '';
};

export const formatJSDateToCellFormat = (date: Date | null) => {
  return date ? DateTime.fromJSDate(date).toFormat('LLL dd,yyyy') : null;
};
