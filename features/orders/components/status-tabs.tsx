import { Badge } from '@/components/ui/badge';

interface StatusTabsProps {
  value: string;
  onChange: (value: string) => void;
}

const StatusTabs = ({ value, onChange }: StatusTabsProps) => {
  const statusTabs = ['Preparing', 'On the Way', 'Delivered', 'Done', 'Canceled'];

  return (
    <div className='flex-start flex-wrap gap-2 md:gap-3'>
      {statusTabs.map((tab) => (
        <Badge
          key={tab}
          variant={value === tab ? 'danger-rounded' : 'outline-rounded'}
          className='cursor-pointer'
          onClick={() => onChange(tab)}
        >
          {tab}
        </Badge>
      ))}
    </div>
  );
};

export default StatusTabs;
