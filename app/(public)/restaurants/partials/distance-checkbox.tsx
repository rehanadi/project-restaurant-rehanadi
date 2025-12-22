import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface DistanceCheckboxProps {
  label: string;
  value: number;
  checked: boolean;
  onCheckedChange: (value: number | undefined) => void;
}

const DistanceCheckbox = ({ label, value, checked, onCheckedChange }: DistanceCheckboxProps) => {
  const id = `distance-${value}`;

  const handleChange = (isChecked: boolean | 'indeterminate') => {
    if (isChecked === true) {
      onCheckedChange(value);
    } else {
      onCheckedChange(undefined);
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
      <Label htmlFor={id} className="cursor-pointer">
        {label}
      </Label>
    </div>
  );
};

export default DistanceCheckbox;