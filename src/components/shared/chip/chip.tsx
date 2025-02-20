export type ChipColor = 'success' | 'warning' | 'error';

type ChipProps = {
  label: string;
  color: ChipColor;
};

const Chip = ({ color, label }: ChipProps) => {
  const getCustomColor = (color: ChipColor): string => {
    switch (color) {
      case 'error':
        return 'bg-red-50 text-red-500';
      case 'success':
        return 'bg-emerald-50 text-emerald-500';
      case 'warning':
        return 'bg-amber-50 text-amber-500';
      default: {
        console.error(`${color} is not implemented yet.`);
        return 'bg-neutral-100 text-neutral-800';
      }
    }
  };

  return (
    <div className={`w-fit rounded-full px-[14px] py-1 ${getCustomColor(color)}`}>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default Chip;
