'use client';

import Section from '@/components/layouts/section';
import Menu from '@/features/shared/components/menu';
import ProfileContainer from './partials/profile-container';
import ProfileInfo from './partials/profile-info';
import { useGetProfile } from '@/features/auth/hooks';

const ProfilePage = () => {
  useGetProfile();

  return (
    <ProfileContainer>
      <Menu />
      <Section title="Profile" className="py-0 md:py-0 md:gap-6">
        <ProfileInfo />
      </Section>
    </ProfileContainer>
  );
};

export default ProfilePage;