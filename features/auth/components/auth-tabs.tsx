'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';

interface AuthTabsProps {
  value: 'login' | 'register';
}

const AuthTabs = ({ value }: AuthTabsProps) => {
  const router = useRouter();

  const handleValueChange = (value: string) => {
    router.push(`/${value}`);
  };

  return (
    <Tabs
      value={value}
      onValueChange={handleValueChange}
    >
      <TabsList>
        <TabsTrigger value='login'>Sign in</TabsTrigger>
        <TabsTrigger value='register'>Sign up</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default AuthTabs;
