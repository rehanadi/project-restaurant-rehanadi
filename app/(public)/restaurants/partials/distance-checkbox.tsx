import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const DistanceCheckbox = ({
  label,
  value,
  checked = false,
}: {
  label: string;
  value: string;
  checked: boolean;
}) => {
  return (
    <div className='flex-start gap-2'>
      <Checkbox
        id={value}
        checked={checked}
        onCheckedChange={() => {}}
      />
      <Label htmlFor={value}>
        {label}
      </Label>
    </div>
  );
};

export default DistanceCheckbox;