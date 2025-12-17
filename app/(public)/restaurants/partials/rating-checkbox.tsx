import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";

const RatingCheckbox = ({
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
      <Label
        htmlFor={value}
        className="flex-start gap-0.5"
      >
        <Icon
          icon='material-symbols:star-rounded'
          className='size-6 text-yellow-500'
        />
        <span>{label}</span>
      </Label>
    </div>
  );
};

export default RatingCheckbox;