import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface DistanceCheckboxProps {
  label: string;
  value: number;
  checked: boolean;
  onCheckedChange: (value: number) => void;
}

const DistanceCheckbox = ({ label, value, checked, onCheckedChange }: DistanceCheckboxProps) => {
  const id = `distance-${value}`;

  return (
    <div className="flex-start gap-2" suppressHydrationWarning>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={() => onCheckedChange(value)}
        suppressHydrationWarning
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

export default DistanceCheckbox;