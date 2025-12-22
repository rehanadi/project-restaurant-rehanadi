import { cn } from '@/lib/utils';

interface SummaryItemProps {
  label: string;
  value: string;
  isTotal?: boolean;
}

const SummaryItem = ({ label, value, isTotal = false }: SummaryItemProps) => {
  return (
    <div className="flex-between gap-4">
      <span
        className={cn('font-medium text-sm md:text-md', {
          'text-md md:text-lg': isTotal,
        })}
      >
        {label}
      </span>

      <span
        className={cn('font-bold text-sm md:text-md', {
          'font-extrabold text-md md:text-lg': isTotal,
        })}
      >
        {value}
      </span>
    </div>
  );
};

export default SummaryItem;