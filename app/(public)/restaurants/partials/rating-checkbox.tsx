import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Icon } from '@iconify/react';

interface RatingCheckboxProps {
  label: string;
  value: number;
  checked: boolean;
  onCheckedChange: (value: number | null) => void;
}

const RatingCheckbox = ({ label, value, checked, onCheckedChange }: RatingCheckboxProps) => {
  const id = `rating-${value}`;

  const handleChange = (isChecked: boolean | 'indeterminate') => {
    if (isChecked === true) {
      onCheckedChange(value);
    } else {
      onCheckedChange(null);
    }
  };

  return (
    <div className="flex-start gap-2" suppressHydrationWarning>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={handleChange}
        suppressHydrationWarning
      />
      <Label htmlFor={id} className="flex-start gap-0.5 cursor-pointer">
        <Icon icon="material-symbols:star-rounded" className="size-6 text-yellow-500" />
        <span>{label}</span>
      </Label>
    </div>
  );
};

export default RatingCheckbox;