import { Badge } from '@/components/ui/badge';

interface CategoryTabsProps {
  value: string;
  onChange: (value: string) => void;
}

const CategoryTabs = ({ value, onChange }: CategoryTabsProps) => {
  const categoryTabs = ['All Menu', 'Food', 'Drink'];

  return (
    <div className='flex-start flex-wrap gap-2 md:gap-3'>
      {categoryTabs.map((tab) => (
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

export default CategoryTabs;
