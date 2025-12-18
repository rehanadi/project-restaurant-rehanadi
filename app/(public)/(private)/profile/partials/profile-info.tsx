import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import ProfileItem from "./profile-item";

const ProfileInfo = () => {
  return (
    <div className="md:max-w-131 shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:gap-3">
        <Avatar className='size-16'>
          <AvatarImage
            src="/images/avatar.png"
            className="rounded-full"
          />
          <AvatarFallback>
            U
          </AvatarFallback>
        </Avatar>

        <ProfileItem label="Name" value="John Doe" />
        <ProfileItem label="Email" value="johndoe@email.com" />
        <ProfileItem label="Nomor Handphone" value="081234567890" />
      </div>

      <Button
        className="w-full h-11 md:h-11"
      >
        Update Profile
      </Button>
    </div>
  );
};

export default ProfileInfo;