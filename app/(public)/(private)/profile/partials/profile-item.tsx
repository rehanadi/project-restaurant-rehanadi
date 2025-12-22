interface ProfileItemProps {
  label: string;
  value?: string;
}

const ProfileItem = ({
  label,
  value,
}: ProfileItemProps) => {
  return (
    <div className="flex-between gap-4">
      <span className="font-medium text-sm md:text-md">
        {label}
      </span>
      <span className="font-bold text-sm md:text-md">
        {value}
      </span>
    </div>
  );
};

export default ProfileItem;