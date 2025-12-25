import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import ProfileItem from './profile-item';
import { useAppSelector } from '@/lib/hooks';
import Link from "next/link";

const ProfileInfo = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="md:max-w-131 shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:gap-3">
        <Avatar className="size-16">
          <AvatarImage
            src={user?.avatar || '/images/avatar.png'}
            className="rounded-full"
          />
          <AvatarFallback>{user?.name.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
        </Avatar>

        <ProfileItem label="Name" value={user?.name || '-'} />
        <ProfileItem label="Email" value={user?.email || '-'} />
        <ProfileItem label="Nomor Handphone" value={user?.phone || '-'} />
      </div>

      <Button className="w-full h-11 md:h-11" asChild>
        <Link href="/profile/edit">
          Update Profile
        </Link>
      </Button>
    </div>
  );
};

export default ProfileInfo;