'use client';

import Section from '@/components/layouts/section';
import Menu from '@/features/shared/components/menu';
import EditProfileContainer from "./partials/edit-profile-container";
import EditProfileForm from "./partials/edit-profile-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const EditProfilePage = () => {
  return (
    <EditProfileContainer>
      <Menu />
      <Section
        title={
          <div className="flex-start gap-4">
            <Link href="/profile">
              <ArrowLeft className="size-6" />
            </Link>
            <h1 className="font-extrabold text-display-xs md:text-display-md">
              Update Profile
            </h1>
          </div>
        }
        className="py-0 md:py-0 md:gap-6"
      >
        <EditProfileForm />
      </Section>
    </EditProfileContainer>
  );
};

export default EditProfilePage;