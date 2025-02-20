export const formattedAmount = ({
  amount,
  locale = 'id-ID',
}: {
  amount: number | null;
  locale?: string;
}) => {
  return amount ? Intl.NumberFormat(locale).format(amount) : null;
};
